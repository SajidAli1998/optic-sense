"use client";

import React from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { client } from "@/sanity/sanity-client"; // Import your Sanity client

export default function HomeClientsSection() {
  const [logos, setLogos] = React.useState([]);
  const [clientDescription, setClientDescription] = React.useState({});

  React.useEffect(() => {
    client
      .fetch(`*[_type == "client"]{name, logo{asset->{url}}} | order(name asc)`)
      .then(setLogos);

    client
      .fetch(`*[_type == "clientDescription"][0]`)
      .then(setClientDescription);
  }, []);

  return (
    <SectionWrapper maxWidth="lg">
      <BackgroundImage src="/images/twirly-lines.png" alt="" />
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={6}
      >
        <LeftContent>
          <Typography variant="h3" component="h2" className="title">
            Our <br />
            <span className="highlight">Valued Clients</span>
          </Typography>
          <Underline />
          <Typography variant="body1" className="subtitle">
            {clientDescription.description}
          </Typography>
        </LeftContent>

        <RightContent>
          <Grid container spacing={1} justifyContent="center">
            {logos.map((logo, idx) => (
              <Grid item xs={4} sm={3} md={3} lg={2} key={idx}>
                <LogoBox>
                  <img src={logo.logo.asset.url} alt={logo.name} />
                </LogoBox>
              </Grid>
            ))}
          </Grid>
        </RightContent>
      </Stack>
    </SectionWrapper>
  );
}

const SectionWrapper = styled(Container)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(8, 4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 2),
  },
}));

const LeftContent = styled(Box)(({ theme }) => ({
  flex: "1",
  textAlign: "left",
  maxWidth: 500,
  zIndex: 2,
  ".title": {
    fontWeight: 800,
    color: "#4C0D11",
    fontSize: "2.4rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  },
  ".highlight": {
    color: "#4C0D11",
  },
  ".subtitle": {
    marginTop: theme.spacing(2),
    fontSize: "1.1rem",
    color: theme.palette.text.secondary,
  },
}));

const Underline = styled("div")(({ theme }) => ({
  width: "100px",
  height: "4px",
  backgroundColor: "#4C0D11",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const RightContent = styled(Box)(({ theme }) => ({
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
}));

const LogoBox = styled(Box)(({ theme }) => ({
  background: "#fff",
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
  "& img": {
    maxWidth: "100%",
    maxHeight: 70,
    objectFit: "contain",
  },
}));

const BackgroundImage = styled("img")({
  position: "absolute",
  width: "100%",
  opacity: 0.5,
  pointerEvents: "none",
  userSelect: "none",
  zIndex: 1,
  top: 0,
  left: 0,
  right: 0,
});

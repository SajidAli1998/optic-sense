"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { client } from "@/sanity/sanity-client";
import { urlFor } from "@/sanity/lib/image";

export default function ClientsLogos() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "client"] | order(order asc)`).then(setLogos);
  }, []);

  return (
    <SectionWrapper maxWidth="xl">
      <BackgroundImage src="/images/twirly-lines.png" alt="" />
      <Typography
        variant="subtitle2"
        sx={{
          textAlign: "center",
          fontWeight: 600,
          color: "primary.main",
          mb: 1,
          textTransform: "uppercase",
          position: "relative",
          zIndex: 2,
        }}
      >
        MEET OUR CLIENTS
      </Typography>
      <SectionTitle variant="h4">Our Valued Clients</SectionTitle>
      <SectionSubtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        augue sed suscipit dictum, erat odio luctus magna, sed pharetra orci
        magna nec tortor. Nullam eget mi eget
      </SectionSubtitle>
      <Grid container spacing={4} justifyContent="center">
        {logos.map((logo, idx) => (
          <Grid item xs={6} sm={4} md={3} key={idx}>
            <LogoBox>
              {logo.logo && <img src={urlFor(logo.logo)} alt={logo.name} />}
            </LogoBox>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

const SectionWrapper = styled(Container)(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  padding: theme.spacing(8, 20),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 4),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 2),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(2),
  fontSize: "2rem",
  position: "relative",
  zIndex: 2,
  [theme.breakpoints.up("md")]: {
    fontSize: "2.8rem",
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  maxWidth: 900,
  margin: "0 auto",
  marginBottom: theme.spacing(8),
  fontSize: "1.1rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
  position: "relative",
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
  position: "relative",
  zIndex: 2,
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
  top: 20,
  left: 0,
  right: 0,
});

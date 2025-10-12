"use client";

import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function HomeAboutSection() {
  return (
    <SectionWrapper maxWidth="lg">
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        alignItems="center"
        justifyContent="space-between"
      >
        <LeftContent>
          <Typography className="eyebrow" variant="subtitle2">
            A BIT
          </Typography>
          <Typography className="title" variant="h3" component="h2">
            ABOUT US
          </Typography>
          <Underline />

          <Typography className="description" variant="body1">
            Experience the Future of Electrical & Telecom Solutions with
            Opticsense WLL. As a trusted cabling company in Doha, Qatar — and an
            approved contractor for major government clients, we deliver
            state-of-the-art cabling and telecom solutions tailored for today’s
            multi-vendor data environments.
            <br />
            <br />
            With strong resources and project management expertise, we provide
            turnkey solutions that are efficient, cost-effective, and
            future-ready. At Opticsense, we believe in building long-term
            partnerships through the latest technologies, seamless
            communication, and continuous innovation.
          </Typography>

          <StyledButton variant="contained" disabled>
            INNOVATE , INTEGRATE , TECHNOLOGY
          </StyledButton>
        </LeftContent>

        <RightContent>
          <TopImage
            src="/images/about/fiber-cable.png"
            alt="Fiber Optic Cable"
          />
          <MiddleImage src="/images/about/wires.png" alt="Wires" />
          <BottomImageWrapper>
            <BottomImage src="/images/about/city-night.png" alt="City Night" />
            <ICABadge>
              <img src="/images/about/ica-badge.png" alt="ICA Certified" />
            </ICABadge>
            <CertTag>ICA • Certified • Trusted</CertTag>
          </BottomImageWrapper>
        </RightContent>
      </Stack>
    </SectionWrapper>
  );
}

const SectionWrapper = styled(Container)(({ theme }) => ({
  position: "relative",
  marginTop: theme.spacing(10),
  padding: theme.spacing(3, 4, 8),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 2),
    marginTop: theme.spacing(0),
  },
}));

const LeftContent = styled(Box)(({ theme }) => ({
  flex: "1",
  textAlign: "left",
  maxWidth: 550,
  ".eyebrow": {
    color: "#A94444",
    fontWeight: 700,
    letterSpacing: "0.1em",
    marginBottom: theme.spacing(1),
  },
  ".title": {
    fontWeight: 800,
    fontSize: "2.4rem",
    color: "#2B0E0E",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  },
  ".description": {
    marginTop: theme.spacing(2),
    fontSize: "1.05rem",
    lineHeight: 1.6,
    color: theme.palette.text.secondary,
  },
}));

const Underline = styled("div")(({ theme }) => ({
  width: "100px",
  height: "4px",
  backgroundColor: "#4C0D11",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#4C0D11",
  color: "#fff",
  borderRadius: "6px",
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5, 4),
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  "&:hover": {
    backgroundColor: "#2e090b",
  },
  "&.Mui-disabled": {
    backgroundColor: "#4C0D11",
    color: "#fff",
    opacity: 1,
  },
}));

const RightContent = styled(Box)(({ theme }) => ({
  flex: "1",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "auto auto",
  gap: theme.spacing(2),
  position: "relative",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const TopImage = styled("img")(({ theme }) => ({
  gridColumn: "1 / 3",
  width: "100%",
  borderRadius: "12px",
  objectFit: "cover",
  height: "180px",
  [theme.breakpoints.down("md")]: {
    gridColumn: "1",
    height: "150px",
  },
}));

const MiddleImage = styled("img")(({ theme }) => ({
  gridColumn: "2 / 3",
  gridRow: "2",
  width: "100%",
  borderRadius: "12px",
  objectFit: "cover",
  height: "180px",
  [theme.breakpoints.down("md")]: {
    gridColumn: "1",
    gridRow: "auto",
  },
}));

const BottomImageWrapper = styled(Box)(({ theme }) => ({
  gridColumn: "1 / 2",
  gridRow: "2",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    gridColumn: "1",
    gridRow: "auto",
  },
}));

const BottomImage = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: "12px",
  objectFit: "cover",
  height: "180px",
}));

const ICABadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-20px",
  left: "-20px",
  background: "#fff",
  borderRadius: "50%",
  padding: "10px",
  width: "60px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  "& img": {
    maxWidth: "100%",
  },
}));

const CertTag = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "-15px",
  right: "-10px",
  backgroundColor: "#4C0D11",
  color: "#fff",
  fontSize: "0.8rem",
  padding: "6px 12px",
  borderRadius: "6px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
}));

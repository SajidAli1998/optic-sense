import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function LocateUs() {
  return (
    <ContainerStyled maxWidth="xl">
      <BackgroundImage src="/images/barbed-wire-contact.png" alt="" />
      <SectionTitleStyled variant="h4">Locate Us</SectionTitleStyled>
      <SubtitleStyled variant="subtitle1" align="center">
        You can reach us at the location shown below.
      </SubtitleStyled>
      <MapBox>
        <MapIframe
          title="OpticSense WLL Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.648134925079!2d51.53415677525723!3d25.258236977662874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dba30ac0d125%3A0xe2340a4a152f5a4e!2sOPTICSENSE%20WLL!5e0!3m2!1sen!2sqa!4v1728755600000!5m2!1sen!2sqa"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapBox>
    </ContainerStyled>
  );
}

const SectionTitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(2),
  position: "relative",
  textAlign: "center",
  fontSize: "2rem",
  color: theme.palette.background.default,
  [theme.breakpoints.up("md")]: {
    fontSize: "2.8rem",
  },
  "&::after": {
    content: '""',
    display: "block",
    width: "100px",
    maxWidth: 800,
    height: "8px",
    background: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.1) 100%)",
    borderRadius: "20px",
    margin: "0 auto",
    marginTop: theme.spacing(2),
  },
}));

const SubtitleStyled = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontSize: "0.95rem",
  color: theme.palette.background.default,
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
}));

const MapBox = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  display: "flex",
  width: "100%",
  height: 220,
  overflow: "hidden",
  boxShadow: theme.shadows[3],
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    height: 450,
  },
}));

const MapIframe = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "100%",
  border: 0,
  zIndex: 1,
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  margin: "1rem auto",
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  position: "relative",
}));

const BackgroundImage = styled("img")({
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  opacity: 0.75,
  pointerEvents: "none",
  userSelect: "none",
  zIndex: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

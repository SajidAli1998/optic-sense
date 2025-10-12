"use client";

import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

export default function HeroTopSection() {
  return (
    <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
      <BackgroundAbsouluteImage src="images/home-hero.png" alt="" />
      <HeroStack
        direction={{ xs: "column", lg: "row" }}
        alignItems={{ xs: "stretch", md: "center" }}
        justifyContent="space-between"
        my={5}
      >
        <GlassPanel>
          <InnerGlow />
          <Content>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", sm: "2.6rem", md: "4rem" },
                lineHeight: 1.3,
              }}
            >
              Where <br />
              Technology <br />
              <span className="highlight">Meets</span>
              &nbsp;Speed & <br />
              Reliability
            </Typography>
          </Content>
        </GlassPanel>

        <ImagePanel>
          <BackgroundImage src="images/hero-image.png" alt="Hero" />
        </ImagePanel>
      </HeroStack>
    </Container>
  );
}

const HeroStack = styled(Stack)(({ theme }) => ({
  width: "100%",
  minHeight: "80vh",
  overflow: "hidden",
  position: "relative",
  paddingLeft: theme.spacing(4),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(0),
    marginTop: theme.spacing(3),
    minHeight: "auto",
  },
}));

/** 🧊 Frosted Glass Panel */
const GlassPanel = styled(Box)(({ theme }) => ({
  position: "relative",
  flex: "0 0 45%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  marginRight: "-5%",
  padding: "60px",
  borderRadius: "24px",
  backdropFilter: "blur(42px)",
  WebkitBackdropFilter: "blur(42px)",
  background: `
    radial-gradient(
      circle at 30% 30%,
      rgba(111, 255, 246, 0.35) 0%,
      rgba(143, 209, 245, 0.25) 26.56%,
      rgba(56, 183, 255, 0.25) 100%
    )
  `,
  overflow: "hidden",
  zIndex: 1,

  [theme.breakpoints.down("md")]: {
    flex: "1 1 100%",
    marginRight: 0,
    padding: "24px 20px",
    justifyContent: "flex-start",
  },
}));

/** ✨ Inner radial glow */
const InnerGlow = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none",
  background:
    "radial-gradient(circle at top left, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 70%)",
  mixBlendMode: "screen",
});

/** Text Content */
const Content = styled("div")(({ theme }) => ({
  color: "#000",
  textAlign: "left",
  width: "100%",
  maxWidth: "600px",
  zIndex: 1,
  ".highlight": {
    color: "#800000",
    fontWeight: 800,
  },

  [theme.breakpoints.down("sm")]: {
    textAlign: "left",
  },
}));

const ImagePanel = styled(Box)(({ theme }) => ({
  flex: "1 1 55%",
  height: "80vh",
  overflow: "hidden",
  position: "relative",
  zIndex: 0,

  [theme.breakpoints.down("lg")]: {
    marginTop: theme.spacing(4),
    display: "none",
  },
}));

const BackgroundImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  display: "block",
});

const BackgroundAbsouluteImage = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "50%",
  pointerEvents: "none",
  userSelect: "none",
  opacity: 1,
  zIndex: 0,
  top: 0,
  left: 0,
  right: 0,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    top: -40,
  },
}));

"use client";

import React from "react";
import { Box, Typography, Grid, Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function ServicesSection() {
  const services = [
    {
      title: "FIBER OPTICS INSTALLATION",
      description:
        "We provide end-to-end fiber optics installation services, ensuring high-speed and reliable connectivity for businesses and homes. Our certified team handles everything from cable laying to splicing and termination, guaranteeing minimal downtime and maximum performance.",
      image: "/images/services/fiber1.png",
    },
    {
      title: "NETWORK TESTING & CERTIFICATION",
      description:
        "Using advanced tools and equipment, we conduct thorough testing and certification of fiber optic networks. From signal strength analysis to fault detection, we make sure your infrastructure meets international quality and safety standards.",
      image: "/images/services/fiber2.png",
    },
    {
      title: "MAINTENANCE & TROUBLESHOOTING",
      description:
        "Our dedicated support team provides regular maintenance and quick troubleshooting to keep your fiber optic systems running smoothly. Whether it’s diagnosing issues, repairing damaged cables, or upgrading existing networks, we deliver reliable solutions with minimal disruption.",
      image: "/images/services/fiber3.png",
    },
  ];

  return (
    <SectionWrapper>
      <BackgroundImage src="/images/twirly-lines.png" alt="" />
      <BackgroundImage2 src="/images/twirly-lines.png" alt="" />

      {/* Header */}
      <Typography
        variant="subtitle2"
        sx={{
          textAlign: "center",
          fontWeight: 600,
          color: "primary.main",
          textTransform: "uppercase",
          mb: 1,
          position: "relative",
          zIndex: 2,
        }}
      >
        OUR SERVICES
      </Typography>

      <SectionTitle variant="h4">Services Designed to Support You</SectionTitle>
      <SectionSubtitle>
        Our services are built to support your business with efficiency,
        quality, and innovation—helping you save time, reduce stress, and reach
        your goals with ease.
      </SectionSubtitle>

      <Container>
        {services.map((service, index) => (
          <Stack
            key={index}
            direction={{ xs: "column", md: "row" }}
            gap={6}
            alignItems="center"
            sx={{ mb: 8 }}
          >
            <ImageBox sx={{ width: { xs: "100%", md: 400 } }}>
              <img src={service.image} alt={service.title} />
            </ImageBox>

            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 600, mb: 2, color: "primary.main" }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign={{ xs: "center", md: "justify" }}
              >
                {service.description}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Container>

      <ExperienceWrapper>
        <Grid container spacing={6} alignItems="center" direction="row">
          <Grid item xs={12} md={6}>
            <Box justifyItems={"center"}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                25+ Years of{" "}
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                  }}
                >
                  Experience
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                With over two decades of expertise, we have successfully
                delivered fiber optic solutions for enterprises, government
                projects, and residential developments across the region. Our
                commitment to quality, safety, and innovation has earned us the
                trust of leading organizations and continues to drive us toward
                building smarter, faster, and more reliable networks for the
                future.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <ImageBox>
              <img
                src="/images/services/fiber-experience.png"
                alt="Experience"
              />
            </ImageBox>
          </Grid>
        </Grid>
      </ExperienceWrapper>
    </SectionWrapper>
  );
}

const SectionWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  padding: theme.spacing(8, 2),
  background: "#fff",
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
  maxWidth: 800,
  margin: "0 auto",
  marginBottom: theme.spacing(6),
  fontSize: "1rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
  position: "relative",
  zIndex: 2,
}));

const ImageBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  overflow: "hidden",
  boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
  "& img": {
    width: "100%",
    height: "auto",
    display: "block",
  },
}));

const ExperienceBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(6),
  textAlign: "center",
  maxWidth: 700,
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
  zIndex: 2,
}));

const BackgroundImage = styled("img")({
  position: "absolute",
  width: "100%",
  opacity: 0.5,
  pointerEvents: "none",
  userSelect: "none",
  zIndex: 1,
  top: 30,
  left: 0,
  right: 0,
});

const BackgroundImage2 = styled("img")({
  position: "absolute",
  width: "100%",
  opacity: 0.5,
  pointerEvents: "none",
  userSelect: "none",
  zIndex: 1,
  left: 0,
  right: 0,
  bottom: 400,
});

const ExperienceWrapper = styled(Container)(({ theme }) => ({
  backgroundColor: "#fff",
  position: "relative",
  textAlign: "center",
}));

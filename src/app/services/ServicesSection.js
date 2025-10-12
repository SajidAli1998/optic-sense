"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { client } from "@/sanity/sanity-client";
import { urlFor } from "@/sanity/lib/image";

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "service"] | order(order asc)`).then(setServices);
    client.fetch(`*[_type == "experienceSection"][0]`).then(setExperience);
  }, []);

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
            key={service._id || index}
            direction={{ xs: "column", md: "row" }}
            gap={6}
            alignItems="center"
            sx={{ mb: 8 }}
          >
            <ImageBox sx={{ width: { xs: "100%", md: 400 } }}>
              {service.image && (
                <img src={urlFor(service.image)} alt={service.title} />
              )}
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
              {service.gallery && service.gallery.length > 0 && (
                <Box sx={{ mt: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {service.gallery.map((img, i) => (
                    <Box
                      key={img._key || i}
                      sx={{ width: 120, borderRadius: 2, overflow: "hidden" }}
                    >
                      <img
                        src={urlFor(img)}
                        alt={`Gallery ${i + 1}`}
                        style={{ width: "100%" }}
                      />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Stack>
        ))}
      </Container>

      {experience && (
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
                  {experience.heading}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {experience.description}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <ImageBox>
                {experience.image && (
                  <img src={urlFor(experience.image)} alt="Experience" />
                )}
              </ImageBox>
            </Grid>
          </Grid>
        </ExperienceWrapper>
      )}
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

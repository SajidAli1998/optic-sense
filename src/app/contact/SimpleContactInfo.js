"use client";

import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { client } from "../../sanity/sanity-client";

export default function SimpleContactInfo() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "contactInfo"][0]`).then(setContact);
  }, []);

  return (
    <StyledContainer maxWidth="xl">
      <BackgroundImage src="/images/twirly-lines.png" alt="" />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Section>
            <Title variant="subtitle1">Contact Info</Title>
            <Heading variant="h3">
              We are always happy <br /> to assist you
            </Heading>
          </Section>
        </Grid>

        <Grid item xs={12} md={3}>
          <Section>
            <Label variant="h6">Email Address</Label>
            <Underline />
            <StrongText variant="body1">{contact?.email}</StrongText>
            <BodyText variant="body2">
              Assistance hours:
              <br />
              {contact?.hours}
            </BodyText>
          </Section>
        </Grid>

        <Grid item xs={12} md={3}>
          <Section>
            <Label variant="h6">Number</Label>
            <Underline />
            <StrongText variant="body1">{contact?.phone}</StrongText>
          </Section>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(6, 4),
  justifyItems: "center",
}));

const Section = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: theme.palette.primary.main,
  fontSize: "2rem",
  lineHeight: 1.2,
  [theme.breakpoints.up("md")]: {
    fontSize: "2.8rem",
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
}));

const Underline = styled(Box)(({ theme }) => ({
  width: 32,
  height: 2,
  background: theme.palette.primary.main,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const StrongText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

const BodyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  lineHeight: 2,
}));

const BackgroundImage = styled("img")({
  position: "absolute",
  width: "100%",
  opacity: 0.7,
  objectFit: "cover",
  zIndex: -1,
  top: -60,
  left: 0,
  bottom: 0,
  right: 0,
});

"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ContactUsSection from "./ContactUsSection";
import LocateUs from "./LocateUs";
import SimpleContactInfo from "./SimpleContactInfo";

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  position: "relative",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "block",
    width: "40px",
    height: "2px",
    backgroundColor: theme.palette.primary.main,
    margin: "0 auto",
    marginTop: theme.spacing(1),
  },
}));

export default function ContactPage() {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.background.default,
        minHeight: "100vh",
        pb: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ pt: 8, px: { xs: 1, md: 0 } }}>
        <SectionTitle
          variant="h4"
          sx={{
            fontSize: { xs: "2.2rem", md: "2.8rem" },
            color: "primary.main",
            fontWeight: 800,
          }}
        >
          Contact Us
        </SectionTitle>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
          Have a question or feedback? Send us a message!
        </Typography>
        <ContactUsSection />
      </Container>
      <LocateUs />
      <SimpleContactInfo />
    </Box>
  );
}

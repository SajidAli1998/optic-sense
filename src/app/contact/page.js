"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ContactUsSection from "./ContactUsSection";
import LocateUs from "./LocateUs";
import SimpleContactInfo from "./SimpleContactInfo";
import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  return (
    <Container maxWidth={false} sx={{ pt: 8, px: { xs: 1, md: 0 } }}>
      <Helmet>
        <title>OPTICSENSE - Contact Us</title>
        <meta name="description" content="OPTICSENSE - Get in touch with us." />
      </Helmet>
      <ContactUsSection />
      <LocateUs />
      <SimpleContactInfo />
    </Container>
  );
}

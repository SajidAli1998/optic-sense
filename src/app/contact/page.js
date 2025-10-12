"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ContactUsSection from "./ContactUsSection";
import LocateUs from "./LocateUs";
import SimpleContactInfo from "./SimpleContactInfo";

export default function ContactPage() {
  return (
    <Container maxWidth={false} sx={{ pt: 8, px: { xs: 1, md: 0 } }}>
      <ContactUsSection />
      <LocateUs />
      <SimpleContactInfo />
    </Container>
  );
}

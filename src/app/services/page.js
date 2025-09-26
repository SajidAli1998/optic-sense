"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import ServicesSection from "./ServicesSection";

export default function About() {
  return (
    <Container maxWidth={false} sx={{ px: { xs: 1, md: 0 } }}>
      <ServicesSection />
    </Container>
  );
}

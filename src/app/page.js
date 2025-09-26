"use client";

import * as React from "react";
import Container from "@mui/material/Container";

import ContactUsSection from "./contact/ContactUsSection";
import LocateUs from "./contact/LocateUs";

export default function Home() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ px: { xs: 1, md: 0 }, py: { xs: 5, md: 0 } }}
      >
        <ContactUsSection />
        <LocateUs />
      </Container>
    </>
  );
}

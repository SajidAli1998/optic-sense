"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import ContactUsSection from "./contact/ContactUsSection";
import LocateUs from "./contact/LocateUs";
import HeroTopSection from "@/components/HeroTopSection";
import StatsSection from "@/components/StatsSection";
import OurServices from "@/components/OurServices";
import HomeClientsSection from "@/components/HomeClientsSection";
import HomeAboutSection from "@/components/AboutUs";

export default function HeroSection() {
  return (
    <Container maxWidth={false} disableGutters>
      <HeroTopSection />
      <StatsSection />
      <OurServices />
      <HomeClientsSection />
      <HomeAboutSection />
      <ContactUsSection />
      <LocateUs />
    </Container>
  );
}

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
import { Helmet } from "react-helmet-async";
import ProductsSection from "@/components/HomeProducts";

export default function HeroSection() {
  return (
    <Container maxWidth={false} disableGutters>
      <Helmet>
        <title>OPTICSENSE - Home</title>
        <meta
          name="description"
          content="OPTICSENSE - Your partner in EHV Cabling, Civil Works, Telecommunication & Fiber Optic Solutions."
        />
      </Helmet>
      <HeroTopSection />
      <StatsSection />
      <OurServices />
      <HomeClientsSection />
      <ProductsSection />
      <HomeAboutSection />
      <ContactUsSection />
      <LocateUs />
    </Container>
  );
}

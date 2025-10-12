"use client";

import * as React from "react";
import ServicesSection from "./ServicesSection";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>OPTICSENSE - Services</title>
        <meta
          name="description"
          content="OPTICSENSE - Our services and solutions."
        />
      </Helmet>
      <ServicesSection />
    </>
  );
}

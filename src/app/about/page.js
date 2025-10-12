"use client";

import * as React from "react";
import AboutUs from "./AboutUs";
import AboutMissionVision from "./AboutMissionVision";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>OPTICSENSE - About Us</title>
        <meta
          name="description"
          content="OPTICSENSE - Learn more about our mission, vision, and values."
        />
      </Helmet>
      <AboutUs />
      <AboutMissionVision />
    </>
  );
}

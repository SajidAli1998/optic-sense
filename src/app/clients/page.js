"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import ClientsLogos from "./ClientsLogos";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <Container maxWidth={false} sx={{ px: { xs: 1, md: 0 } }}>
      <Helmet>
        <title>OPTICSENSE - Clients</title>
        <meta
          name="description"
          content="OPTICSENSE - Our valued clients and partners."
        />
      </Helmet>
      <ClientsLogos />
    </Container>
  );
}

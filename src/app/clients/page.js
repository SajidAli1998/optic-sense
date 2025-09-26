"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import ClientsLogos from "./ClientsLogos";

export default function About() {
  return (
    <Container maxWidth={false} sx={{ px: { xs: 1, md: 0 } }}>
      <ClientsLogos />
    </Container>
  );
}

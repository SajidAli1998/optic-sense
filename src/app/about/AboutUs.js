"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";

export default function AboutUs() {
  return (
    <Container
      maxWidth="xl"
      sx={{ py: { xs: 2, md: 6 }, position: "relative" }}
    >
      <BackgroundImage src="images/about/about-background.png" alt="" />
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="stretch"
        gap={5}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Stack p={4} flex={1} spacing={2} justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <StyledTag>About Us</StyledTag>
          </Box>
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Who We Are
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 2 }}>
            We are proud of our skilled and passionate team, where each member
            contributes creativity, expertise, and dedication. Together, we
            collaborate to bring fresh ideas, deliver excellence, and create
            lasting value.
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            We are proud of our skilled and passionate team, where each member
            contributes creativity, expertise, and dedication. Together, we
            collaborate to bring fresh ideas, deliver excellence, and create
            lasting value.
          </Typography>
        </Stack>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 0,
          }}
        >
          <Box>
            <img
              src="/images/about/about-right.png"
              alt="Team"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "inherit",
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}

const StyledTag = styled(Box)(({ theme }) => ({
  display: "inline-block",
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
  borderRadius: "999px",
  fontWeight: 600,
  fontSize: "0.95rem",
  marginBottom: theme.spacing(2),
  boxShadow: theme.shadows[1],
  transform: "rotate(-5deg)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "rotate(0deg) scale(1.05)",
  },
}));

const BackgroundImage = styled("img")({
  position: "absolute",
  width: "100%",
  opacity: 0.5,
  pointerEvents: "none",
  userSelect: "none",
  zIndex: 0,
  top: 0,
  left: 0,
  right: 0,
});

"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const products = [
  {
    title: "Fiber Optic Connectivity",
    image: "/images/products/fiber.png",
  },
  {
    title: "Optical cables",
    image: "/images/products/optical.png",
  },
  {
    title: "CAT Cables",
    image: "/images/products/cat.png",
  },
  {
    title: "Detectable warning tapes",
    image: "/images/products/tapes.png",
  },
];

export default function ProductsSection() {
  return (
    <SectionBox>
      <BackgroundImage src="images/about/about-background.png" alt="" />
      <Container maxWidth="xl">
        <Stack alignItems="center" spacing={2}>
          <SectionTitleStyled variant="h1" fontWeight={700} color="#fff">
            Our Products
          </SectionTitleStyled>
          <Typography
            align="center"
            sx={{
              color: "#d3cfcf",
              maxWidth: 700,
              fontSize: "1rem",
            }}
          >
            We offer a range of products crafted with care, combining quality,
            innovation, and reliability to meet your needs.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={2}
          justifyContent="center"
          flexWrap="wrap"
          sx={{ mt: 6 }}
        >
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            {products.slice(0, 2).map((item, index) => (
              <CardStyled key={index}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                />
                <Overlay />
                <CardContentStyled>
                  <Typography variant="h6" fontWeight={600}>
                    {item.title}
                  </Typography>
                </CardContentStyled>
              </CardStyled>
            ))}
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            {products.slice(2, 4).map((item, index) => (
              <CardStyled key={index}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                />
                <Overlay />
                <CardContentStyled>
                  <Typography variant="h6" fontWeight={600}>
                    {item.title}
                  </Typography>
                </CardContentStyled>
              </CardStyled>
            ))}
          </Stack>
        </Stack>
      </Container>
    </SectionBox>
  );
}

const SectionBox = styled(Box)(() => ({
  backgroundColor: "#4C0D11",
  backgroundImage: "url('/images/barbed-wire-bg.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "80px 0",
  position: "relative",
}));

const Underline = styled("div")({
  width: "100px",
  height: "3px",
  backgroundColor: "#fff",
  borderRadius: "2px",
});

const CardStyled = styled(Card)(() => ({
  position: "relative",
  borderRadius: "10px",
  overflow: "hidden",
  width: "100%",
  maxWidth: 420,
  cursor: "pointer",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
}));

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 25%, rgba(0, 0, 0, 0.15) 80%)",
  zIndex: 1,
});

const CardContentStyled = styled(CardContent)(() => ({
  position: "absolute",
  bottom: "16px",
  left: "16px",
  right: "16px",
  zIndex: 2,
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const DetailsButton = styled(Button)(() => ({
  backgroundColor: "#fff",
  color: "#4C0D11",
  borderRadius: "20px",
  textTransform: "none",
  padding: "4px 16px",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

const ExploreButton = styled(Button)(() => ({
  backgroundColor: "#fff",
  color: "#4C0D11",
  borderRadius: "30px",
  fontWeight: 600,
  textTransform: "none",
  padding: "10px 32px",
  fontSize: "1rem",
  pointerEvents: "none",
  "&:hover": {
    backgroundColor: "#fff",
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

const SectionTitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(2),
  position: "relative",
  textAlign: "center",
  fontSize: "2rem",
  color: theme.palette.background.default,
  [theme.breakpoints.up("md")]: {
    fontSize: "2.8rem",
  },
  "&::after": {
    content: '""',
    display: "block",
    width: "100px",
    maxWidth: 800,
    height: "8px",
    background: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.1) 100%)",
    borderRadius: "20px",
    margin: "0 auto",
    marginTop: theme.spacing(2),
  },
}));

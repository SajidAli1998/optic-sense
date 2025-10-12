"use client";

import * as React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import styled from "@emotion/styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { client } from "@/sanity/sanity-client";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

export default function ServicesSection() {
  const [services, setServices] = React.useState([]);
  const router = useRouter();

  React.useEffect(() => {
    client.fetch(`*[_type == "service"] | order(order asc)`).then(setServices);
  }, []);

  return (
    <SectionWrapper>
      <BackgroundImage
        src="/images/barbed-wire-long.png"
        alt=""
        style={{ top: 0, left: 0, bottom: 0, right: 0 }}
      />
      <Container maxWidth="lg">
        <HeaderWrapper>
          <SectionTitleStyled variant="h4">Our Services</SectionTitleStyled>
          <Typography variant="body1" className="section-subtitle">
            At Opticsense, we are dedicated to providing innovative solutions
            tailored to meet the unique needs of our clients. Our diverse range
            of services is designed to empower businesses across various
            industries, ensuring they achieve their goals with excellence and
            efficiency. Discover how our expertise can help elevate your
            business to new heights.
          </Typography>
        </HeaderWrapper>

        <ScrollableStack
          gap={4}
          alignItems="stretch"
          justifyContent="stretch"
          direction={{ xs: "column", md: "row" }}
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx}>
              <ImageWrapper>
                <ServiceImage src={urlFor(service.image)} alt={service.title} />
              </ImageWrapper>
              <CardContent>
                <Typography variant="h6" className="card-title">
                  {service.title}
                </Typography>
                <Typography variant="body2" className="card-description">
                  {service.description}
                </Typography>
                <ReadMore onClick={() => router.push("/services")}>
                  Read more <ArrowForwardIcon fontSize="small" />
                </ReadMore>
              </CardContent>
            </ServiceCard>
          ))}
        </ScrollableStack>
      </Container>
    </SectionWrapper>
  );
}

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

const SectionWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#550D16",
  backgroundImage: "url('/images/barbed-wire-bg.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "80px 0",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    padding: "50px 0",
  },
}));

const HeaderWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
  ".section-title": {
    fontWeight: 800,
    marginBottom: theme.spacing(1),
  },
  ".section-subtitle": {
    color: "rgba(255,255,255,0.75)",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: 1.5,
  },
}));

const ScrollableStack = styled(Stack)(({ theme }) => ({
  overflowY: "auto",
  padding: theme.spacing(2),
}));

const ServiceCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  zIndex: 1,
  borderRadius: "16px",
  overflow: "hidden",
  width: "100%",
  maxWidth: "420px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
  },
}));

const ImageWrapper = styled(Box)({
  width: "100%",
  height: "220px",
});

const ServiceImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover", // Ensures images cover the area
  display: "block",
});

const CardContent = styled(Box)(({ theme }) => ({
  padding: "20px",
  color: "#550D16",
  ".card-title": {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  ".card-description": {
    color: "#444",
    fontSize: "0.9rem",
    marginBottom: theme.spacing(2),
    lineHeight: 1.4,
  },
}));

const ReadMore = styled(Button)({
  color: "#550D16",
  textTransform: "none",
  fontWeight: 600,
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "0.9rem",
  background: "transparent",
  "&:hover": {
    background: "transparent",
    textDecoration: "underline",
  },
});

const BackgroundImage = styled("img")({
  position: "absolute",
  width: "100%",
  opacity: 0.75,
  pointerEvents: "none",
  userSelect: "none",
  zIndex: 0,
});

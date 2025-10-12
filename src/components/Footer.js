"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Facebook, Instagram, LinkedIn, X, YouTube } from "@mui/icons-material";
import { client } from "@/sanity/sanity-client";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "OUR CLIENTS", href: "/clients" },
  { label: "ABOUT", href: "/about" },
];

export default function Footer() {
  const [contact, setContact] = useState(null);
  const [social, setSocial] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "contactInfo"][0]`).then(setContact);
    client.fetch(`*[_type == "socialLinks"][0]`).then(setSocial);
  }, []);

  console.log(social);

  return (
    <FooterWrapper component="footer">
      <BackgroundImage
        src="/images/barbed-wire.png"
        alt=""
        style={{ top: 0, left: 0, bottom: 0, right: 0 }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <SectionTitle variant="h6">COMPANY INFO</SectionTitle>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                width: { xs: "70%", md: "70%" },
                lineHeight: 1.6,
                textAlign: { xs: "center", sm: "left" },
                marginInline: { xs: "auto", sm: "0" },
              }}
            >
              OpticSense WLL – Delivering excellence in EHV Cabling, Civil
              Works, Telecommunication & Fiber Optic Solutions.
            </Typography>
            <Box>
              {social?.linkedin && (
                <SocialIcon
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener"
                >
                  <LinkedIn fontSize="inherit" />
                </SocialIcon>
              )}
              {social?.facebook && (
                <SocialIcon
                  href={social.facebook}
                  target="_blank"
                  rel="noopener"
                >
                  <Facebook fontSize="inherit" />
                </SocialIcon>
              )}
              {social?.youtube && (
                <SocialIcon
                  href={social.youtube}
                  target="_blank"
                  rel="noopener"
                >
                  <YouTube fontSize="inherit" />
                </SocialIcon>
              )}
              {social?.instagram && (
                <SocialIcon
                  href={social.instagram}
                  target="_blank"
                  rel="noopener"
                >
                  <Instagram fontSize="inherit" />
                </SocialIcon>
              )}
              {social?.twitter && (
                <SocialIcon
                  href={social.twitter}
                  target="_blank"
                  rel="noopener"
                >
                  <X fontSize="inherit" />
                </SocialIcon>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 4, md: 8 }}
              justifyContent="flex-end"
              sx={{ width: "100%", maxWidth: "600px" }}
            >
              <Box>
                <SectionTitle variant="h6">USEFUL LINKS</SectionTitle>
                {navLinks.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </Box>

              <Box>
                <SectionTitle variant="h6">CONTACT INFO</SectionTitle>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  Email:{" "}
                  <FooterLink href={`mailto:${contact?.email}`}>
                    {contact?.email}
                  </FooterLink>
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  Phone: {contact?.phone}
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  Assistance hours: <br />
                  {contact?.hours}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <BottomBar>
          <Typography variant="body2">Copyright © 2025</Typography>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(3),
  position: "relative",
  overflow: "hidden",
  width: "100%",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    justifyItems: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));

const BackgroundImage = styled("img")({
  position: "absolute",
  width: "100%",
  opacity: 0.75,
  pointerEvents: "none",
  userSelect: "none",
  zIndex: 0,
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  position: "relative",
  textAlign: "left",
  "&::after": {
    content: '""',
    display: "block",
    width: "40px",
    height: "2px",
    backgroundColor: "#fff",
    marginTop: theme.spacing(1),
    marginLeft: 0,
    marginRight: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    "&::after": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  display: "block",
  marginBottom: theme.spacing(1.5),
  fontSize: "0.95rem",
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  fontSize: "1.6rem",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const BottomBar = styled(Box)(({ theme }) => ({
  borderTop: "1px solid rgba(255,255,255,0.2)",
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(1.5),
  fontSize: "0.85rem",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

"use client";

import React from "react";
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
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";

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
  "&::after": {
    content: '""',
    display: "block",
    width: "40px",
    height: "2px",
    backgroundColor: "#fff",
    marginTop: theme.spacing(1),
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

export default function Footer() {
  return (
    <FooterWrapper component="footer">
      <BackgroundImage
        src="/images/barbed-wire.png"
        alt=""
        style={{ top: 0, left: 0, bottom: 0, right: 0 }}
      />

      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} size={[12, 12, 6, 6]}>
            <SectionTitle variant="h6">COMPANY INFO</SectionTitle>
            <Typography
              variant="body2"
              sx={{ mb: 3, maxWidth: 340, lineHeight: 1.6 }}
            >
              OpticSense WLL – Delivering excellence in EHV Cabling, Civil
              Works, Telecommunication & Fiber Optic Solutions.
            </Typography>
            <Box>
              <SocialIcon href="#">
                <LinkedIn fontSize="inherit" />
              </SocialIcon>
              <SocialIcon href="#">
                <Facebook fontSize="inherit" />
              </SocialIcon>
              <SocialIcon href="#">
                <YouTube fontSize="inherit" />
              </SocialIcon>
              <SocialIcon href="#">
                <Instagram fontSize="inherit" />
              </SocialIcon>
            </Box>
          </Grid>

          <Grid item size={[12, 12, 6, 6]} xs={12} md={6}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 4, md: 8 }}
              justifyContent="flex-end"
              alignItems="flex-start"
              sx={{ width: "100%", maxWidth: "600px" }}
            >
              <Box>
                <SectionTitle variant="h6">USEFUL LINKS</SectionTitle>
                {["HOME", "SERVICES", "OUR CLIENTS", "ABOUT", "CONTACT"].map(
                  (text) => (
                    <FooterLink
                      key={text}
                      href={`/${text.toLowerCase().replace(" ", "")}`}
                    >
                      {text}
                    </FooterLink>
                  )
                )}
              </Box>

              <Box>
                <SectionTitle variant="h6">CONTACT INFO</SectionTitle>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  Email:{" "}
                  <FooterLink href="mailto:help@info.com">
                    help@info.com
                  </FooterLink>
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  Phone: (808) 998-34256
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  Assistance hours: <br />
                  Monday – Friday 6 am to 8 pm EST
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <BottomBar>
          <Typography variant="body2">Copyright © 2025</Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Use</FooterLink>
          </Box>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Grid,
  IconButton,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Phone,
  Email,
  LocationOn,
  X,
} from "@mui/icons-material";
import { client } from "../../sanity/sanity-client";

export default function ContactUsSection() {
  const [contact, setContact] = useState(null);
  const [social, setSocial] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "contactInfo"][0]`).then(setContact);
    client.fetch(`*[_type == "socialLinks"][0]`).then(setSocial);
  }, []);
  return (
    <>
      <SectionWrapper>
        <BackgroundImage src="/images/twirly-lines.png" alt="" />
        <SectionTitle variant="h4">Contact Us</SectionTitle>
        <SectionSubtitle variant="subtitle1" align="center">
          Have a question or feedback? Send us a message!
        </SectionSubtitle>
      </SectionWrapper>

      <StyledGridContainer spacing={0} maxWidth="xl">
        <StyledGridItemLeft item xs={12} md={7}>
          <ContactInfoBox>
            <ContactInfoTitle variant="h5">
              Contact Information
            </ContactInfoTitle>
            <ContactInfoSubtitle variant="subtitle3">
              Say something to start a live chat!
            </ContactInfoSubtitle>
            <Stack spacing={3} sx={{ mb: 4, width: "100%" }}>
              <ContactInfoRow>
                <Phone sx={{ fontSize: 28 }} />
                <ContactInfoText>{contact?.phone}</ContactInfoText>
              </ContactInfoRow>
              <ContactInfoRow>
                <Email sx={{ fontSize: 28 }} />
                <Box>
                  <ContactInfoText>{contact?.email}</ContactInfoText>
                </Box>
              </ContactInfoRow>
              <ContactInfoRow>
                <LocationOn sx={{ fontSize: 28 }} />
                <ContactInfoText>{contact?.address}</ContactInfoText>
              </ContactInfoRow>
            </Stack>
            <SocialIconsWrapper>
              {social?.linkedin && (
                <SocialIconBox>
                  <StyledIconButton
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener"
                  >
                    <LinkedIn />
                  </StyledIconButton>
                </SocialIconBox>
              )}
              {social?.facebook && (
                <SocialIconBox>
                  <StyledIconButton
                    href={social.facebook}
                    target="_blank"
                    rel="noopener"
                  >
                    <Facebook />
                  </StyledIconButton>
                </SocialIconBox>
              )}
              {social?.youtube && (
                <SocialIconBox>
                  <StyledIconButton
                    href={social.youtube}
                    target="_blank"
                    rel="noopener"
                  >
                    <YouTube />
                  </StyledIconButton>
                </SocialIconBox>
              )}
              {social?.instagram && (
                <SocialIconBox>
                  <StyledIconButton
                    href={social.instagram}
                    target="_blank"
                    rel="noopener"
                  >
                    <Instagram />
                  </StyledIconButton>
                </SocialIconBox>
              )}
              {social?.twitter && (
                <SocialIconBox>
                  <StyledIconButton
                    href={social.twitter}
                    target="_blank"
                    rel="noopener"
                  >
                    <X />
                  </StyledIconButton>
                </SocialIconBox>
              )}
            </SocialIconsWrapper>
          </ContactInfoBox>
        </StyledGridItemLeft>
        <StyledGridItemRight item xs={12} md={5}>
          <FormBox>
            <Box sx={{ mb: 2 }}>
              <SectionTitle variant="h4">
                Get in{" "}
                <PrimaryColorSpan component="span">Touch</PrimaryColorSpan>
              </SectionTitle>
            </Box>
            <FormSubtitle variant="body1">
              Have a question or idea? We'd love to hear from you—just send us a
              message!
            </FormSubtitle>
            <StyledForm>
              <Stack spacing={2}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  size="small"
                />
                <TextField
                  label="Phone number"
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                />
                <TextField
                  label="Drop your message here"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  size="small"
                />
                <StyledButton
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  SEND
                </StyledButton>
              </Stack>
            </StyledForm>
          </FormBox>
        </StyledGridItemRight>
      </StyledGridContainer>
    </>
  );
}

const SectionWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  marginBottom: theme.spacing(6),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "2.2rem",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  position: "relative",
  display: "inline-block",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "block",
    width: "80px",
    height: "5px",
    borderRadius: "20px",
    backgroundColor: theme.palette.secondary.main,
    margin: `${theme.spacing(1)} auto 0 auto`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.8rem",
    textAlign: "left",
    marginLeft: 0,
    marginRight: "auto",
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  marginBottom: theme.spacing(6),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledGridContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const StyledGridItemLeft = styled(Grid)(({ theme }) => ({
  flexBasis: "30%",
  maxWidth: "60%",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  [theme.breakpoints.down("md")]: {
    flexBasis: "100%",
    maxWidth: "100%",
  },
}));

const StyledGridItemRight = styled(Grid)(({ theme }) => ({
  flexBasis: "70%",
  maxWidth: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  [theme.breakpoints.down("md")]: {
    flexBasis: "100%",
    maxWidth: "100%",
  },
}));

const ContactInfoBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: theme.palette.primary.main,
  color: "#fff",
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(3, 3),
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
}));

const FormBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "#fff",
  borderRadius: theme.shape.borderRadius * 3,
  padding: theme.spacing(4),
}));

const ContactInfoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "2.1rem",
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.6rem",
  },
}));

const ContactInfoSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  fontSize: "1rem",
  textAlign: "left",
  opacity: 0.85,
  [theme.breakpoints.down("md")]: {
    fontSize: "0.95rem",
  },
}));

const ContactInfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const ContactInfoText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
}));

const SocialIconsWrapper = styled(Box)(({ theme }) => ({
  marginTop: "auto",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(4),
  paddingBottom: theme.spacing(2),
}));

const SocialIconBox = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.2s",
  "&:hover": {
    background: "rgba(255,255,255,0.35)",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  fontSize: 24,
  padding: 0,
  transition: "color 0.2s",
  "&:hover": {
    color: theme.palette.secondary.main,
    background: "transparent",
  },
}));

const FormSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontSize: "1rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.95rem",
  },
}));

const StyledForm = styled("form")({
  flex: 1,
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const PrimaryColorSpan = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: "inline",
}));

const BackgroundImage = styled("img")({
  position: "absolute",
  width: "100%",
  opacity: 0.45,
  pointerEvents: "none",
  userSelect: "none",
  zIndex: 1,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

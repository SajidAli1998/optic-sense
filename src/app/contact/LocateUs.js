import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  position: "relative",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "block",
    width: "40px",
    height: "2px",
    backgroundColor: theme.palette.primary.main,
    margin: "0 auto",
    marginTop: theme.spacing(1),
  },
}));

export default function LocateUs() {
  return (
    <Container maxWidth="lg" sx={{ pt: 6, px: { xs: 1, md: 0 } }}>
      <SectionTitle
        variant="h4"
        sx={{
          fontSize: { xs: "2rem", md: "2.8rem" },
          color: "primary.main",
          fontWeight: 800,
        }}
      >
        Locate Us
      </SectionTitle>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ mb: 4, fontSize: { xs: "0.95rem", md: "1.1rem" } }}
      >
        You can reach us at the location shown below.
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: { xs: 220, md: 450 },
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 3,
          mb: 2,
        }}
      >
        <iframe
          title="OpticSense Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0000000000005!2d51.53100000000001!3d25.261000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sOld%20Airport%20Area%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1690000000000!5m2!1sen!2sqa"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Container>
  );
}

import React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Grid,
  IconButton,
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
} from "@mui/icons-material";

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
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(1),
  },
}));

export default function ContactUsSection() {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: {
          xs: "column",
          md: "row",
          lg: "row",
          "@media (max-width:1150px)": {
            flexDirection: "column",
          },
        },
        alignItems: "stretch",
      }}
    >
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          display: "flex",
          mb: { xs: 3, md: 0 },
          maxWidth: { xs: "100%", md: "100%", lg: "100%" },
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <Box
          sx={{
            background: (theme) => theme.palette.primary.main,
            color: "#fff",
            borderRadius: 2,
            p: { xs: 3, md: 6 },
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            width: "100%",
            maxWidth: { xs: "100%", md: 480 },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minHeight: { xs: 320, md: 420 },
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "1.6rem", md: "2.1rem" },
              textAlign: "left",
            }}
          >
            Contact Information
          </Typography>
          <Typography
            variant="subtitle3"
            sx={{
              mb: 5,
              fontSize: { xs: "0.95rem", md: "1rem" },
              textAlign: "left",
              opacity: 0.85,
            }}
          >
            Say something to start a live chat!
          </Typography>
          <Stack spacing={3} sx={{ mb: 4, width: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Phone sx={{ fontSize: 28 }} />
              <Typography sx={{ fontSize: "1rem" }}>+974 44507855</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Email sx={{ fontSize: 28 }} />
              <Box>
                <Typography sx={{ fontSize: "1rem" }}>
                  opticsense@opticsense.qa
                </Typography>
                <Typography sx={{ fontSize: "1rem" }}>
                  info@opticsenseqatar.com
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LocationOn sx={{ fontSize: 28 }} />
              <Typography sx={{ fontSize: "1rem" }}>
                C.R No. 150415, 2nd Floor, Bldg. 272
                <br />
                Old Airport Area Doha- Qatar
              </Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              mt: "auto",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: 4,
              pb: 2,
            }}
          >
            {[LinkedIn, Facebook, YouTube, Instagram].map((Icon, idx) => (
              <Box
                key={idx}
                sx={{
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
                }}
              >
                <IconButton
                  href="#"
                  sx={{
                    color: "#fff",
                    fontSize: 24,
                    p: 0,
                    transition: "color 0.2s",
                    "&:hover": {
                      color: (theme) => theme.palette.secondary.main,
                      background: "transparent",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          maxWidth: { xs: "100%", md: "100%", lg: 600 },
          mx: { xs: "auto", md: 0 },
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <Box
          sx={{
            background: "#fff",
            borderRadius: 3,
            p: { xs: 2, md: 4 },

            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <SectionTitle
              variant="h4"
              sx={{
                fontSize: { xs: "1.3rem", md: "2.5rem" },
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Get in{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Touch
              </Box>
            </SectionTitle>
          </Box>
          <Typography
            variant="body1"
            sx={{ mb: 3, fontSize: { xs: "0.95rem", md: "1rem" } }}
          >
            Have a question or idea? We'd love to hear from you—just send us a
            message!
          </Typography>
          <form style={{ flex: 1 }}>
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
                rows={4}
                size="small"
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                SEND
              </Button>
            </Stack>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

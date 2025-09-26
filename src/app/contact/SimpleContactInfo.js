"use client";

import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const Underline = styled(Box)(({ theme }) => ({
  width: 32,
  height: 2,
  background: theme.palette.primary.main,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export default function SimpleContactInfo() {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={6}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: {
          xs: "column",
          alignItems: "center",
          md: "row",
          lg: "row",
          "@media (max-width:1150px)": {
            flexDirection: "column",
          },
        },
      }}
    >
      <Grid item xs={12} md={6} size={[12, 12, 6, 6]}>
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.text.secondary, mb: 1 }}
        >
          Contact Info
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: theme.palette.primary.main,
            fontSize: { xs: "2rem", md: "2.8rem" },
            lineHeight: 1.2,
          }}
        >
          We are always happy to assist you
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h6"
          sx={{ color: theme.palette.primary.main, fontWeight: 700 }}
        >
          Email Address
        </Typography>
        <Underline />
        <Typography
          variant="body1"
          sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 1 }}
        >
          help@info.com
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
          Assistance hours:
          <br />
          Monday – Friday 6 am to 8 pm EST
        </Typography>
      </Grid>

      {/* Column 3: Number */}
      <Grid item xs={12} md={4}>
        <Typography
          variant="h6"
          sx={{ color: theme.palette.primary.main, fontWeight: 700 }}
        >
          Number
        </Typography>
        <Underline />
        <Typography
          variant="body1"
          sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 1 }}
        >
          (808) 998-34256
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
          Assistance hours:
          <br />
          Monday – Friday 6 am to 8 pm EST
        </Typography>
      </Grid>
    </Grid>
  );
}

"use client";
import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#550D16",
    },
    secondary: {
      main: "#111111",
    },
    background: {
      default: "#ffffff",
      paper: "#f9f9f9",
    },
    divider: "#e5e5e5",
    text: {
      primary: "#111111",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: { fontWeight: 700, fontSize: "2.5rem", letterSpacing: "-0.5px" },
    h2: { fontWeight: 600, fontSize: "2rem" },
    h3: { fontWeight: 600, fontSize: "1.5rem" },
    h4: { fontWeight: 500, fontSize: "1.25rem" },
    body1: { fontWeight: 400, fontSize: "1rem" },
    body2: { fontWeight: 300, fontSize: "0.9rem" },
    button: { fontWeight: 600, textTransform: "none" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "999px",
          padding: "10px 24px",
          fontWeight: 600,
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: "info" },
              style: {
                backgroundColor: "#7A0E1B",
                color: "#fff",
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;

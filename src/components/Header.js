"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavLink = styled("a")(({ theme }) => ({
  marginLeft: theme.spacing(3),
  textDecoration: "none",
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontFamily: "'Poppins', sans-serif",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "OUR CLIENTS", href: "/clients" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
    { label: "OUR TEAM", href: "/team" },
  ];

  const drawer = (
    <Box
      sx={{
        width: 260,
        height: "100%",
        bgcolor: "primary.main",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        p: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem button key={link.href} component="a" href={link.href}>
            <ListItemText
              primary={link.label}
              primaryTypographyProps={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "background.default",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              aria-label="menu"
              sx={{ color: "primary.main", mr: 1, display: { md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <img
              src="/images/logo.png"
              alt="Opticsense WLL"
              style={{ height: 50 }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </Box>

          <Button
            size="small"
            href="/contact"
            variant="contained"
            sx={{
              ml: 3,
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.dark" },
              "@media (max-width:400px)": {
                display: "none",
              },
            }}
          >
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 260,
            bgcolor: "primary.main",
            color: "#fff",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

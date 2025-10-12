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
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "OUR CLIENTS", href: "/clients" },
    { label: "ABOUT", href: "/about" },
  ];

  return (
    <Container maxWidth="xl">
      <StyledAppBar position="static">
        <StyledToolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MobileMenuButton
              edge="start"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </MobileMenuButton>
            <LogoLink href="/">
              <LogoImg src="/images/logo.png" alt="Opticsense WLL" />
            </LogoLink>
          </Box>
          <DesktopNav>
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                $active={pathname === link.href}
              >
                {link.label}
              </NavLink>
            ))}
          </DesktopNav>
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
        </StyledToolbar>
      </StyledAppBar>

      <StyledDrawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
          disableScrollLock: false,
        }}
        disableScrollLock={false}
      >
        <DrawerContent>
          <DrawerBackgroundImage src="/images/barbed-wire-drawer.png" alt="" />
          <DrawerCloseBox>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
              <CloseIcon />
            </IconButton>
          </DrawerCloseBox>
          <List>
            {navLinks.map((link) => (
              <DrawerListItem
                key={link.href}
                component="a"
                href={link.href}
                active={pathname === link.href}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={link.label} />
              </DrawerListItem>
            ))}
          </List>
        </DrawerContent>
      </StyledDrawer>
    </Container>
  );
}

const LogoLink = styled("a")({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
});

const NavLink = styled("a")(({ theme, $active }) => ({
  marginLeft: theme.spacing(3),
  textDecoration: "none",
  color: $active ? theme.palette.primary.main : theme.palette.text.primary,
  fontWeight: 600,
  fontFamily: "'Poppins', sans-serif",
  transition: "color 0.2s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const LogoImg = styled("img")(({ theme }) => ({
  height: 50,
  [theme.breakpoints.down("400px")]: {
    display: "none",
  },
}));

const DesktopNav = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginRight: theme.spacing(1),
  display: "block",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: "none",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    paddingRight: theme.spacing(2),
  },
}));

const StyledDrawer = styled(Drawer)({
  position: "relative",
  "& .MuiDrawer-paper": {
    width: "100vw",
    height: "100%",
    backgroundColor: "#550D16",
    color: "#fff",
    maxWidth: "100vw",
    maxHeight: "100vh",
    borderRadius: 0,
    overflowY: "auto",
    touchAction: "auto",
  },
});

const DrawerBackgroundImage = styled("img")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: 1,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

const DrawerContent = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3),
  position: "relative",
  zIndex: 1,
}));

const DrawerCloseBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
});

const DrawerListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  backgroundColor: active ? "rgba(255,255,255,0.12)" : "inherit",
  "& .MuiListItemText-primary": {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    color: "#fff",
  },
}));

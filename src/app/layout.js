"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { usePathname } from "next/navigation";

export default function RootLayout(props) {
  const pathname = usePathname() || "/";
  const isStudio = pathname.includes("/admin-panel");

  console.log(pathname);

  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {!isStudio && <Header />}
            <NextTopLoader color="#550D16" showSpinner={false} />
            {props.children}
            {!isStudio && <Footer />}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

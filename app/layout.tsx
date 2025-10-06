import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { clarityLightTheme, clarityDarkTheme } from "./theme/theme";

export const metadata: Metadata = {
  title: "Clarity",
  description: "A minimal note-taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={clarityDarkTheme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}

"use client";

import { createTheme } from "@mui/material/styles";

const clarityTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2c2c2c",
      light: "#4a4a4a",
      dark: "#1a1a1a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#6b7280",
      light: "#9ca3af",
      dark: "#4b5563",
      contrastText: "#ffffff",
    },
    background: {
      default: "#fafaf9",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#6b7280",
      disabled: "#d1d5db",
    },
    divider: "#e5e7eb",
    action: {
      hover: "rgba(0, 0, 0, 0.02)",
      selected: "rgba(0, 0, 0, 0.04)",
    },
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      letterSpacing: "0.01em",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
    "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
    "0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    "0 4px 6px -1px rgba(0, 0, 0, 0.08)",
    "0 6px 8px -2px rgba(0, 0, 0, 0.10)",
    "0 8px 10px -3px rgba(0, 0, 0, 0.10)",
    "0 10px 15px -3px rgba(0, 0, 0, 0.10)",
    "0 12px 20px -5px rgba(0, 0, 0, 0.12)",
    "0 16px 24px -6px rgba(0, 0, 0, 0.12)",
    "0 20px 25px -5px rgba(0, 0, 0, 0.10)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
    "0 24px 30px -8px rgba(0, 0, 0, 0.12)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
          fontWeight: 500,
          boxShadow: "none",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: "none",
            transform: "translateY(-1px)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        },
        contained: {
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          },
        },
        outlined: {
          borderWidth: "1.5px",
          "&:hover": {
            borderWidth: "1.5px",
            backgroundColor: "rgba(0, 0, 0, 0.02)",
          },
        },
        text: {
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        },
        sizeSmall: {
          padding: "6px 14px",
          fontSize: "0.875rem",
        },
        sizeLarge: {
          padding: "12px 28px",
          fontSize: "1rem",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            transform: "scale(1.05)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        elevation1: {
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.06)",
        },
        elevation2: {
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.08)",
        },
        elevation3: {
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.10)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            backgroundColor: "#ffffff",
            transition: "all 0.2s ease",
            "& fieldset": {
              borderColor: "#e5e7eb",
              borderWidth: "1.5px",
            },
            "&:hover fieldset": {
              borderColor: "#d1d5db",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2c2c2c",
              borderWidth: "2px",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#6b7280",
            "&.Mui-focused": {
              color: "#2c2c2c",
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.06)",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.10)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
          backgroundColor: "#ffffff",
          color: "#1a1a1a",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "1px solid #e5e7eb",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#e5e7eb",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#1a1a1a",
          borderRadius: 6,
          fontSize: "0.875rem",
          padding: "8px 12px",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            transitionDuration: "200ms",
            "&.Mui-checked": {
              transform: "translateX(16px)",
              color: "#fff",
              "& + .MuiSwitch-track": {
                backgroundColor: "#2c2c2c",
                opacity: 1,
                border: 0,
              },
            },
          },
          "& .MuiSwitch-thumb": {
            width: 22,
            height: 22,
          },
          "& .MuiSwitch-track": {
            borderRadius: 13,
            backgroundColor: "#e5e7eb",
            opacity: 1,
          },
        },
      },
    },
  },
});

export default clarityTheme;

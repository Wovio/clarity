"use client";

import { createTheme, PaletteMode } from "@mui/material/styles";

const createClarityTheme = (mode: PaletteMode = "light") => {
  const isLight = mode === "light";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isLight ? "#2c2c2c" : "#ffffff",
        light: isLight ? "#4a4a4a" : "#e5e5e5",
        dark: isLight ? "#1a1a1a" : "#cccccc",
        contrastText: isLight ? "#ffffff" : "#1a1a1a",
      },
      secondary: {
        main: isLight ? "#6b7280" : "#9ca3af",
        light: isLight ? "#9ca3af" : "#d1d5db",
        dark: isLight ? "#4b5563" : "#6b7280",
        contrastText: "#ffffff",
      },
      background: {
        default: isLight ? "#fafaf9" : "#0a0a0a",
        paper: isLight ? "#ffffff" : "#1a1a1a",
      },
      text: {
        primary: isLight ? "#1a1a1a" : "#fafafa",
        secondary: isLight ? "#6b7280" : "#9ca3af",
        disabled: isLight ? "#d1d5db" : "#4b5563",
      },
      divider: isLight ? "#e5e7eb" : "#2c2c2c",
      action: {
        hover: isLight ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.05)",
        selected: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.08)",
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
      isLight
        ? "0 1px 2px 0 rgba(0, 0, 0, 0.03)"
        : "0 1px 2px 0 rgba(0, 0, 0, 0.5)",
      isLight
        ? "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
        : "0 1px 3px 0 rgba(0, 0, 0, 0.6)",
      isLight
        ? "0 2px 4px 0 rgba(0, 0, 0, 0.06)"
        : "0 2px 4px 0 rgba(0, 0, 0, 0.6)",
      isLight
        ? "0 4px 6px -1px rgba(0, 0, 0, 0.08)"
        : "0 4px 6px -1px rgba(0, 0, 0, 0.7)",
      isLight
        ? "0 6px 8px -2px rgba(0, 0, 0, 0.10)"
        : "0 6px 8px -2px rgba(0, 0, 0, 0.7)",
      isLight
        ? "0 8px 10px -3px rgba(0, 0, 0, 0.10)"
        : "0 8px 10px -3px rgba(0, 0, 0, 0.7)",
      isLight
        ? "0 10px 15px -3px rgba(0, 0, 0, 0.10)"
        : "0 10px 15px -3px rgba(0, 0, 0, 0.8)",
      isLight
        ? "0 12px 20px -5px rgba(0, 0, 0, 0.12)"
        : "0 12px 20px -5px rgba(0, 0, 0, 0.8)",
      isLight
        ? "0 16px 24px -6px rgba(0, 0, 0, 0.12)"
        : "0 16px 24px -6px rgba(0, 0, 0, 0.8)",
      isLight
        ? "0 20px 25px -5px rgba(0, 0, 0, 0.10)"
        : "0 20px 25px -5px rgba(0, 0, 0, 0.8)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
      isLight
        ? "0 24px 30px -8px rgba(0, 0, 0, 0.12)"
        : "0 24px 30px -8px rgba(0, 0, 0, 0.9)",
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
              boxShadow: isLight
                ? "0 4px 12px rgba(0, 0, 0, 0.15)"
                : "0 4px 12px rgba(0, 0, 0, 0.5)",
            },
          },
          outlined: {
            borderWidth: "1.5px",
            "&:hover": {
              borderWidth: "1.5px",
              backgroundColor: isLight
                ? "rgba(0, 0, 0, 0.02)"
                : "rgba(255, 255, 255, 0.05)",
            },
          },
          text: {
            "&:hover": {
              backgroundColor: isLight
                ? "rgba(0, 0, 0, 0.04)"
                : "rgba(255, 255, 255, 0.08)",
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
              backgroundColor: isLight
                ? "rgba(0, 0, 0, 0.04)"
                : "rgba(255, 255, 255, 0.08)",
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
            boxShadow: isLight
              ? "0 1px 3px 0 rgba(0, 0, 0, 0.06)"
              : "0 1px 3px 0 rgba(0, 0, 0, 0.6)",
          },
          elevation2: {
            boxShadow: isLight
              ? "0 4px 6px -1px rgba(0, 0, 0, 0.08)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.7)",
          },
          elevation3: {
            boxShadow: isLight
              ? "0 10px 15px -3px rgba(0, 0, 0, 0.10)"
              : "0 10px 15px -3px rgba(0, 0, 0, 0.8)",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 8,
              backgroundColor: isLight ? "#ffffff" : "#1a1a1a",
              transition: "all 0.2s ease",
              "& fieldset": {
                borderColor: isLight ? "#e5e7eb" : "#2c2c2c",
                borderWidth: "1.5px",
              },
              "&:hover fieldset": {
                borderColor: isLight ? "#d1d5db" : "#4a4a4a",
              },
              "&.Mui-focused fieldset": {
                borderColor: isLight ? "#2c2c2c" : "#ffffff",
                borderWidth: "2px",
              },
            },
            "& .MuiInputLabel-root": {
              color: isLight ? "#6b7280" : "#9ca3af",
              "&.Mui-focused": {
                color: isLight ? "#2c2c2c" : "#ffffff",
              },
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: isLight
              ? "0 1px 3px 0 rgba(0, 0, 0, 0.06)"
              : "0 1px 3px 0 rgba(0, 0, 0, 0.6)",
            transition: "all 0.2s ease",
            "&:hover": {
              boxShadow: isLight
                ? "0 10px 15px -3px rgba(0, 0, 0, 0.10)"
                : "0 10px 15px -3px rgba(0, 0, 0, 0.8)",
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
            boxShadow: isLight
              ? "0 1px 2px 0 rgba(0, 0, 0, 0.03)"
              : "0 1px 2px 0 rgba(0, 0, 0, 0.5)",
            backgroundColor: isLight ? "#ffffff" : "#1a1a1a",
            color: isLight ? "#1a1a1a" : "#fafafa",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRight: isLight ? "1px solid #e5e7eb" : "1px solid #2c2c2c",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: isLight ? "#e5e7eb" : "#2c2c2c",
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: isLight ? "#1a1a1a" : "#fafafa",
            color: isLight ? "#ffffff" : "#1a1a1a",
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
                  backgroundColor: isLight ? "#2c2c2c" : "#ffffff",
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
              backgroundColor: isLight ? "#e5e7eb" : "#4a4a4a",
              opacity: 1,
            },
          },
        },
      },
    },
  });
};

// Export both light and dark themes
export const clarityLightTheme = createClarityTheme("light");
export const clarityDarkTheme = createClarityTheme("dark");

// Export the factory function for dynamic theme creation
export default createClarityTheme;

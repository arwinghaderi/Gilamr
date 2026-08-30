import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-abar), tahoma, sans-serif",
  },
  palette: {
    primary: {
      main: "#f5f8f8", // رنگ اصلی
    },
    text: {
      primary: "#1a1a1a", // تایتل اصلی
      secondary: "#4c4c4d", // دیسکریپشن
      disabled: "#f5f8f8", // بعضی دیسکریپشن‌ها (با opacity)
    },
    background: {
      default: "#ffffff",
    },
    action: {
      active: "#1a1a1a",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "800000px", // دکمه‌های گرد
          padding: "0 32px",
          height: 52,
          minWidth: 154,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          background: `
            radial-gradient(27.92% 100% at 50% 0%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%),
            radial-gradient(27.92% 100% at 50% 0%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%),
            linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%)
          `,
          boxShadow:
            "0px 1px 2px -1px rgba(146,146,146,0.4), inset 0px 1px 0px rgba(255,255,255,0.16)",
          color: "#fff",
          transition: "all 0.2s ease",
          "&:hover": {
            opacity: 0.9,
            transform: "scale(1.02)",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        },
      },
    },
  },
});

export default theme;

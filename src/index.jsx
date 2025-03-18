
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer, Bounce} from "react-toastify";
import ReactDOM from 'react-dom/client';
import React from "react";

import config from "./assets/config";
import Main from "./pages/main";
import Router from "./routes";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#7FFFD4" },
      secondary: { main: "#00C4B4" },
      background: { default: "#121212", paper: "#1E1E1E" },
      text: { primary: "#ffffff", secondary: "#bbbbbb" },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: "none",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <title>{config?.pageTitle}</title>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Bounce}
      theme="dark"
    />
    <App />
  </React.StrictMode>
);
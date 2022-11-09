import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import theme from './settings/theme';    
import { ThemeProvider } from "@material-ui/core";

const app = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

const root = ReactDOM.createRoot( document.getElementById("root"));
root.render(app())



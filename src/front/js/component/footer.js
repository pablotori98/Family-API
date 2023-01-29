import React, { Component } from "react";
import { Box, Button, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../../styles/index.css";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <Box className="footerright">
      <Typography variant="h5">Pablo Toribio Alfageme</Typography>
      <Box>
        <a
          className="rrsslogos"
          href="https://www.linkedin.com/in/pablo-toribio-alfageme/"
          target="_blank"
        >
          <LinkedInIcon className="rrsslogos" />
        </a>
        <a
          className="rrsslogos"
          href="https://github.com/pablotori98"
          target="_blank"
        >
          <GitHubIcon />
        </a>
      </Box>
    </Box>
  </footer>
);

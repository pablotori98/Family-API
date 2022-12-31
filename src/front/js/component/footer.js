import React, { Component } from "react";
import { Box, Button, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../../styles/index.css"

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<Box className="footerright">
			<Typography variant="h5">Pablo Toribio Alfageme</Typography>
			<Box className="rrsslogos">
				<LinkedInIcon />
				<GitHubIcon />
			</Box>
		</Box>
	</footer>
);

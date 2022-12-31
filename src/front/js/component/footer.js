import React, { Component } from "react";
import { Box, Button, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../../styles/index.css"

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<Box className="logoimgfooter footerleft"><img src="https://i.pinimg.com/originals/57/0b/be/570bbe3f6f90f39f34ca702bdbc164a4.png"/> <Typography variant="h4" className="ms-2 text-black">Jackson Family</Typography></Box>
		<Box className="footerright">
			<Typography variant="h5">Pablo Toribio Alfageme</Typography>
			<Box>
				<LinkedInIcon />
				<GitHubIcon />
			</Box>
		</Box>
	</footer>
);

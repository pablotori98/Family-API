import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import "../../styles/index.css"
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Box className="container">
				<Link className="linktitle" to="/">
					<Box className="logoimg title"><img src="https://i.pinimg.com/originals/57/0b/be/570bbe3f6f90f39f34ca702bdbc164a4.png"/> <Typography variant="h4" className="ms-2 text-black">Jackson Family</Typography></Box>
				</Link>
			</Box>
		</nav>
	);
};

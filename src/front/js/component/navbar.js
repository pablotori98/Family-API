import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import "../../styles/index.css"
export const Navbar = () => {
	return (
		<nav className="navbar">
			<Box className="container">
				<Link className="linktitle" to="/">
					<Box className="familyname">
						{1+1==2? 
						<Typography variant="h4"><Diversity2Icon fontSize="50px"/></Typography> 
						: 
						<Typography>a</Typography>}
					</Box>
				</Link>
				<Box >
					<Link className="linktitle  m-3"><strong>Home</strong></Link>
					<Link className="linktitle  m-3"><strong>Añadir miembro</strong></Link>
					<Link className="linktitle  m-3"><strong>Ver Familia</strong></Link>
					<Link className="linktitle  m-3"><strong>Crear Familia</strong></Link>
					<Link to="/login" className="linktitle m-3"><strong>Login</strong></Link>
				</Box>
			</Box>
		</nav>
	);
};

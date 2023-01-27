import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import "../../styles/index.css";

export const Navbar = () => {
	const token = sessionStorage.getItem("access_token")
	const logout = ()=>{
		sessionStorage.removeItem("access_token")
		window.location.href = "/"
	}

	const NavbarWithToken = () =>{
		return(
			<nav className="navbar">
			<Box className="container">
			  <Link className="linktitle" to="/">
				<Box className="familyname">
				  {1 + 1 == 2 ? (
					<Typography variant="h4">
					  <Diversity2Icon fontSize="50px" />
					</Typography>
				  ) : (
					<Typography>a</Typography>
				  )}
				</Box>
			  </Link>
			  <Box>
				{/* Navbar con token */}
					<Link to="/" className="linktitle  m-3">
					  <strong>Home</strong>
					</Link>
					<Link to="/addmember" className="linktitle  m-3">
					  <strong>Añadir miembro</strong>
					</Link>
					<Link to="/family" className="linktitle  m-3">
					  <strong>Ver Familia</strong>
					</Link>
					<Link to="/createfamily" className="linktitle  m-3">
					  <strong>Crear Familia</strong>
					</Link>
					<Button 
				   onClick={logout} 
					className="linktitle m-3 text-black">
					  <strong>Logout</strong>
					</Button>
				  </Box>
			  </Box>
		  </nav>
		)
	}


	const NavbarWithoutToken = () =>{
		return(
			<nav className="navbar">
			<Box className="container">
			  <Link className="linktitle" to="/">
				<Box className="familyname">
				  {1 + 1 == 2 ? (
					<Typography variant="h4">
					  <Diversity2Icon fontSize="50px" />
					</Typography>
				  ) : (
					<Typography>a</Typography>
				  )}
				</Box>
			  </Link>
			  <Box>
				{/* Navbar sin token */}
				  <Box>
					<Link to="/" className="linktitle  m-3">
					  <strong>Home</strong>
					</Link>
					<Link to="/signup" className="linktitle  m-3">
					  <strong>Registro</strong>
					</Link>
					<Link to="/login" className="linktitle m-3">
					  <strong>Login</strong>
					</Link>
				  </Box>
			  </Box>
			</Box>
		  </nav>
		)
	}
  return (token? NavbarWithToken(): NavbarWithoutToken());
};

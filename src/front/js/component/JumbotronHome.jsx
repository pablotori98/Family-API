import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


export const JumbotronHome = () =>{
    return (
        <Box className="jumbotron">
            <Typography variant="h2" className="">Gestiona tu árbol genealógico</Typography>
            <Link to="/signup" className="textdecoration"><Button className="glow-on-hover my-5 text-white"><strong>Crea tu cuenta</strong></Button></Link>

        </Box>
    )
}
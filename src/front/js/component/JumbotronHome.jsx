import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


export const JumbotronHome = ({text, button, link}) =>{
    return (
        <Box className="jumbotron">
            <Typography variant="h2" className="">{text}</Typography>
            <Link to={link} className="textdecoration"><Button className="glow-on-hover my-5 text-white"><strong>{button}</strong></Button></Link>

        </Box>
    )
}
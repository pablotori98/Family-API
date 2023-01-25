//Import react
import React from "react";
//Import material
import { Box, Button, TextField, Typography } from "@mui/material";

export const CreateFamily = ()=>{
    const token = sessionStorage.getItem("access_token")
    return (
        <>
        {token?    
        <Box className="d-flex flex-column align-items-center">
            <Typography>Creación de familias</Typography>
            <TextField className="my-2" label='Apellido'/>
            <TextField className="my-2"/>
            <TextField className="my-2"/>
            <TextField className="my-2"/>
            <Button>Crear Familia</Button>
        </Box>
        :
        
        <Box>
            Inicia sesión para crear una familia
        </Box>
        }
        
        </>
    )
}

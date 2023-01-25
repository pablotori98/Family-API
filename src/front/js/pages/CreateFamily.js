//Import react
import React, { useEffect, useState } from "react";
//Import material
import { Box, Button, TextField, Typography } from "@mui/material";

export const CreateFamily = ()=>{
    const token = sessionStorage.getItem("access_token")
    const [apellido, setApellido] = useState("")
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "last_name": {apellido}
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(`${process.env.BACKEND_URL}/api/createfamily/pablotori98`, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }, []);
    


    return (
        <>
        {token?    
        <Box className="d-flex flex-column align-items-center">
            <Typography>Creación de familias</Typography>
            <TextField className="my-2" label='Apellido' onChange={(event)=> setApellido(event.target.value)}/>
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

//Import react
import React, { useEffect, useState } from "react";
//Import material
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";

import tree from "../../img/treee.jpg"

export const CreateFamily = ()=>{
    const token = sessionStorage.getItem("access_token")
    const current_user= sessionStorage.getItem("current_user")
    const [apellido, setApellido] = useState("")
   
    const funcionllamada = async () =>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization",  `Bearer ${sessionStorage.getItem("access_token")}`);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "last_name": apellido
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        await fetch(`${process.env.BACKEND_URL}/api/createfamily/${current_user}`, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

    console.log(token)
    return (
        <>
        {token?    
        <Box className="d-flex flex-column align-items-center mt-5 height100">
            <Typography variant="h2" className="mt-5">Creación de familias</Typography>
            <TextField className="my-2 text-center my-3 w-25" label="Apellido" name="apellido" onChange={(event)=> setApellido(event.target.value)}
            inputProps={{min: 0, style: { textAlign: 'center' }}}
            />


            <Button className="glow-on-hover text-white" onClick={funcionllamada}><strong>Crear Familia</strong></Button>

            <img className="mt-3" src={tree}/>
        </Box>
        :
        
        <Box>
            Inicia sesión para crear una familia
        </Box>
        }
        
        </>
    )
}

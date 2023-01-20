//import React
import React, { useContext, useState } from "react";

//Import Materials
import { Box, Button, TextField, Typography } from "@mui/material";

//Import CSS
import "../../styles/index.css";
import { Formik, useFormik } from "formik";
import { MarkEmailUnread } from "@mui/icons-material";
import { Context } from "../store/appContext";

export const FluxSign = () => {
    const {actions, store} = useContext(Context)
    const [username, setUsername] = useState ('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    const handleSignUp = (firstName, lastName, username, email, password) =>{
        actions.signup(firstName, lastName, username, email, password)
        console.log("stoy dentro")
        console.log(firstName)
    }
    
    return (
            <Box className="background">
            <Box className="card">
              <Typography variant="h3" className="text-black text-center mb-5">
                Registrate
              </Typography>
              <Box className="d-flex flex-column justify-content-center align-items-center inputsector mb-5">
                <form className="inputtext" >
                  <Box className="inputtext">
                    <TextField
                      id="standard-basic"
                      label="Nombre"
                      variant="standard"
                      className="w-100 m-2"
                      onChange={(event)=>setFirstName(event.target.value)}
                    />
                    <TextField
                      id="standard-basic"
                      label="Apellidos"
                      variant="standard"
                      className="w-100 m-2"
                      onChange={(event)=>setLastName(event.target.value)}
      
                    />
                    <TextField
                      id="standard-basic"
                      label="Usuario"
                      variant="standard"
                      className="w-100 m-2"
                      onChange={(event)=>setUsername(event.target.value)}
      
                    />
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      className="w-100 mx-2 mt-3"
                      onChange={(event)=>setEmail(event.target.value)}
                    />
                    <TextField
                      id="standard-basic"
                      type="password"
                      label="Contraseña"
                      variant="standard"
                      className="w-100 mx-2 mt-3"
                      onChange={(event)=>setPassword(event.target.value)}
                    />
                  </Box>
                  <Button variant="contained" className="m-3" onClick={handleSignUp(firstName, lastName, username, email, password)} >
                    Enviar
                  </Button>
                </form>
              </Box>
            </Box>
          </Box>
        )

   }

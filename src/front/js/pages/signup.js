//import React
import React, { useContext, useState } from "react";

//Import Materials
import { Alert, Box, Button, Stack, TextField, Typography } from "@mui/material";

//Import CSS
import "../../styles/index.css";
import { Formik, useFormik } from "formik";
import { ErrorSharp, MarkEmailUnread } from "@mui/icons-material";
import { Context } from "../store/appContext";
import { signupSchema } from "../esquemas";
import * as Yup from "yup"
export const Signup = () => {
    const {actions, store} = useContext(Context)
        

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")  

console.log(firstname, lastname, username, password)
    const handleSignUp = () =>{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "username": username,
        "first_name": firstname,
        "last_name": lastname,
        "email": email,
        "password": password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(`${process.env.BACKEND_URL}/api/signup`, requestOptions)
        .then(response => {
          if (response==200){
            response.json()
          }
          else if (response == 400){
            sessionStorage.setItem("error_signup", "Registro erroneo, intentelo de nuevo")
          }
        })
        .then(result => console.log(result))
        .then(result=> sessionStorage.setItem("sign_up", "Registro completado correctamente"))
        .catch(error => console.log('error', error));
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
            <Button variant="contained" className="m-3" onClick={handleSignUp}>
              Enviar
            </Button>
          </form>
          {sessionStorage.getItem("error_signup")? 
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">This is an error alert — check it out!</Alert>
          </Stack>
          :null}
        </Box>
      </Box>
    </Box>
  );
};

import { TouchAppRounded } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const navigate = useNavigate()
  const {actions, store} = useContext(Context)
  const onSubmit = async(values)=>{
   await actions.login(values.email, values.password)
   window.location.href = "/"
  }


  const { errors, handleBlur, handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit
  });
  console.log(values);

  return (
    <Box className="padrelogin">
      <Box className="cardlogin">
        <form onSubmit={handleSubmit} className="formlogin">
          <Typography variant="h2"><strong>Login</strong></Typography>
          <TextField
            onChange={handleChange}
            label="Email"
            name="email"
            variant="outlined"
            className="my-3 w-50"
            values={values.email}
            error={errors.email}
            helpertext={errors.email && touched.email}
          />
          <TextField
            onChange={handleChange}
            label="Password"
            name="password"
            values={values.password}
            variant="outlined"
            className="my-3 w-50"
          />
          <Button className="glow-on-hover text-white mt-2" type="submit">
            <strong>Inciar sesión</strong>
          </Button>
        </form>
      </Box>
    </Box>
  );
};

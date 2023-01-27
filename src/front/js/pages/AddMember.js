//Import react
import React, { useEffect, useState } from "react";
//Import material
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import tree from "../../img/treee.jpg";
import { array } from "prop-types";

export const AddMember = () => {
  const token = sessionStorage.getItem("access_token");
  const current_user = sessionStorage.getItem("current_user");
  const [familia, setFamilia] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [age, setAge] = useState("");

  const funcionllamada = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("access_token")}`
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      last_name: apellido,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    await fetch(
      `${process.env.BACKEND_URL}/api/createfamily/${current_user}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  console.log("familia", familia);
  console.log("first name", first_name);
  console.log("age", age);
  let ageArray = [];
  for (let i = 0; i <= 100; i++) {
    ageArray.push(i);
  }

  return (
    <>
      {token ? (
        <Box className="height100 d-flex flex-column align-items-center mt-5">
          <Box className="w-50 d-flex flex-column align-items-center">
            <Typography variant="h2" className="mt-5">
              Añadir miembros
            </Typography>

            <select
              className="selectaddmembers"
              onChange={(event) => setFamilia(event.target.value)}
            >
              <option selected hidden>
                Elige tu familia
              </option>
              <option >Jose</option>
              <option>pablo</option>
            </select>

            <TextField
              className="my-2 text-center my-3 w-100"
              label="Nombre"
              name="first_name"
              onChange={(event) => setFirst_name(event.target.value)}
            />
            <select
              className="selectaddmembers"
              onChange={(event) => setAge(event.target.value)}
            >
              <option selected hidden>
                Edad
              </option>
              {ageArray?.map((element) => {
                return <option>{element}</option>;
              })}
            </select>

            <select
              className="selectaddmembers"
              onChange={(event) => setGender(event.target.value)}
            >
              <option selected hidden>
                Género
              </option>
              <option>Mujer</option>
              <option>Hombre</option>
              <option>Hombre transgénero</option>
              <option>Mujer transgénero</option>
              <option>No contesta</option>
            </select>

            <Button
              className="glow-on-hover text-white"
              onClick={funcionllamada}
            >
              <strong>Crear Familia</strong>
            </Button>

            <Box className="d-flex justify-content-center">
              <img className="mt-3" src={tree} />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>Inicia sesión para crear una familia</Box>
      )}
    </>
  );
};

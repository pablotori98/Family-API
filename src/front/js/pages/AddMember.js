//Import react
import React, { useContext, useEffect, useState } from "react";
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
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom";

export const AddMember = () => {
  const token = sessionStorage.getItem("access_token");
  const current_user = sessionStorage.getItem("current_user");
  const { store, actions } = useContext(Context);
  const [familia, setFamilia] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [result, setResult] = useState([]);
  const navigate = useNavigate()
  console.log(result)
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${process.env.BACKEND_URL}/api/getfamily`, requestOptions)
      .then((response) => response.json())
      .then((resultado) => setResult(resultado))
      .catch((error) => console.log("error", error));
  }, []);

  const addmembersfetch = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("access_token")}`
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      first_name: first_name,
      age: age,
      gender: gender,
      last_name: familia,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.BACKEND_URL}/api/createfamilymember/${current_user}/${familia}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => navigate("/family"))
      .catch((error) => console.log("error", error));
  };

  console.log("familia", familia);
  console.log("first name", first_name);
  console.log("age", age);
  console.log("gender", gender);
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
              {result?.map((element) => {
                return <option>{element.last_name}</option>;
              })}
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
              onClick={addmembersfetch}
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

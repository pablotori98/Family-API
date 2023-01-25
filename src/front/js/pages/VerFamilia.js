//Import react
import React, { useContext, useEffect, useState } from "react";
//Import material
import { Box, Button, Table, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Context } from "../store/appContext";

export const VerFamilia = () =>{
    const { store, actions } = useContext(Context);
    const [result, setResult] = useState([]);
    const token = sessionStorage.getItem("access_token")
    useEffect(()=>{
        if(!token){
            window.location.href="/"
        }
    },[])
    useEffect(() => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
  
      fetch(
        `${process.env.BACKEND_URL}/api/getfamily`,
        requestOptions
      )
        .then((response) => response.json())
        .then((resultado) => setResult(resultado))
        .catch((error) => console.log("error", error));
    }, []);
  
    return (
        <Box className="text-black container verfamilias">
        {result?.map((element, index) => {
          return (
            <Box className="text-black" key={index}>
              <Typography variant="h3" className="my-3">Familia {element.last_name}</Typography>
              <table className="w-100 mb-5">
                <TableHead>
                  <TableRow>
                    <TableCell className="tableheaderleft">
                      <strong>First Name</strong>
                    </TableCell>
                    <TableCell className="tableheadercenter">
                      <strong>Last Name</strong>
                    </TableCell>
                    <TableCell className="tableheadercenter">
                      <strong>Age</strong>
                    </TableCell>
                    <TableCell className="tableheaderright">
                      <strong>Gender</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <tbody>
                  {element.members?.map((element2) => {
                    return (
                      <TableRow className="w-100">
                        <TableCell>{element2.first_name}</TableCell>
                        <TableCell>{element2.last_name}</TableCell>
                        <TableCell>{element2.age}</TableCell>
                        <TableCell>{element2.gender}</TableCell>
                      </TableRow>
                    );
                  })}
                </tbody>
              </table>
            </Box>
          );
        })}
      </Box>
  
    )
}
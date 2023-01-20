import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { TableFamily } from "../component/Table.jsx";
import { Box, TableCell, Typography } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { JumbotronHome } from "../component/JumbotronHome.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [result, setResult] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://3001-4geeksacade-reactflaskh-5qood7vl12u.ws-eu83.gitpod.io/api/getfamily",
      requestOptions
    )
      .then((response) => response.json())
      .then((resultado) => setResult(resultado))
      .catch((error) => console.log("error", error));
  }, []);
  console.log(result);

  return (
    <>
    {1+1==2? 
    <JumbotronHome />
    :

    <Box className="text-black container">
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
  }
  </>
  );
};

{
  /* {result?.map((element)=>{return(
			<TableFamily 
			first_name = {element.first_name}
			last_name= {element.last_name}
			age= {element.age}
			id={element.id}
			gender={element.gender}
			/>
			)})}*/
}

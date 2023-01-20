import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { TableFamily } from "../component/Table.jsx";
import { Box, TableCell } from "@mui/material";
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';

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

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];


  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <Box className="text-black container">
      {result?.map((element, index) => {
        return (
          <div className="text-black" key={index}>
            <h1>{element.last_name}</h1>
              <div>
                {element.members?.map((element2)=>{return(
                <>
                <table className="w-100 mb-5">
                  <TableHead>
                    <TableRow>
                      <TableCell className="">First Name</TableCell>
                      <TableCell className="">Last Name</TableCell>
                      <TableCell className="">Age</TableCell>
                      <TableCell className="">Gender</TableCell>
                    </TableRow>
                  </TableHead>
                <tbody>
                  <TableRow>
                    <TableCell>{element2.first_name}</TableCell>
                    <TableCell>{element2.last_name}</TableCell>
                    <TableCell>{element2.age}</TableCell>
                    <TableCell>{element2.gender}</TableCell>
                  </TableRow>

                </tbody>
                </table>                
                </>)})}
              </div>
          </div>
        );
      })}
    </Box>
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

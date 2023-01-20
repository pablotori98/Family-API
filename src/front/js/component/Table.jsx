import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

const columns = [
  { field: 'firstName', headerName: 'Nombre', width: 130 },
  { field: 'lastName', headerName: 'Apellidos', width: 130 },
  {
    field: 'age',
    headerName: 'Edad',
    type: 'number',
    width: 90,
  },
  { field: 'gender', headerName: 'Género', width: 130 },

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



export const TableFamily = ({first_name, last_name, age, id, gender}) => {
    const rows = [
        { id: id, firstName: first_name, lastName: last_name, age: age, gender: gender },

      ];
  return (
    <div style={{ height: "400px", width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection

      />
    </div>
  );
}
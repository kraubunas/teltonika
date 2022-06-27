import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TablePage = () => {
  const [users, setUsers] = useState([]);

  const data = () => {
    fetch(
      'http://localhost:8000/users',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((myJson) => {
        setUsers(myJson);
      });
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <Container sx={{
      width: 750, display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5,
    }}>
    <TableContainer component={Paper}>
      <Table sx={{ width: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              // @ts-ignore
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user
                // @ts-ignore
                  .id}
              </TableCell>
              <TableCell align="right">{user
              // @ts-ignore
                .firstName}</TableCell>
              <TableCell align="right">{user
              // @ts-ignore
                .lastName}</TableCell>
              <TableCell align="right">{user
              // @ts-ignore
                .email}</TableCell>
              <TableCell align="right">{user
              // @ts-ignore
                .age}</TableCell>
              <TableCell align="right">{user
              // @ts-ignore
                .gender}</TableCell>
              <TableCell align="right">{user
              // @ts-ignore
                .category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
};

export default TablePage;

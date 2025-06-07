import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

// function createData(description, status, userId) {
//   return {description, status, userId};
// }

// const rows = [
//   createData('task 1', 'done', 1),
//     createData('task 2', 'pending', 2),
//     createData('task 3', 'in-progress', 3),
//     createData('task 4', 'done', 4),
//     createData('task 5', 'pending', 5)
// ];


const Home = () => {
  const [todos,settodo]=useState([]);

  useEffect(() => {
  axios.get('https://dummyjson.com/todos')
    .then(response => {
      settodo(response.data.todos);
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    });
}, []);

  return (
    <div><TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">userId</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todos) => (
            <TableRow
              key={todos.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {todos.todo}
              </TableCell>
              <TableCell align="right">{todos.completed ? "Completed" : "Pending"}</TableCell>
              <TableCell align="right">{todos.userId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></div>
  )
}

export default Home

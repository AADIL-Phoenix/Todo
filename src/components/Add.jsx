import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Add = () => {
  return (
    <div><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="description" variant="outlined" /><br/>
        <TextField id="outlined-basic" label="status" variant="outlined" /><br/>
        <TextField id="outlined-basic" label="userId" variant="outlined" /><br/>
        <Button variant="contained">Add</Button>
      
    </Box></div>
  )
}

export default Add
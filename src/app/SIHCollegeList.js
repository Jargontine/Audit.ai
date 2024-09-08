import React from 'react';
import { Box, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import SIHstyles from '../css/SIHStyles.module.css';

const collegeData = [
  { id: '001hbd', name: 'IIT Madras (IITM)', city: 'Chennai' },
  { id: '002hbd', name: 'SRM University', city: 'Chennai' },
  { id: '003hbd', name: 'Vellore Institute of Technology', city: 'Chennai' },
  { id: '004hbd', name: 'Anna University', city: 'Chennai' },
  { id: '005hbd', name: 'Loyola College', city: 'Chennai' },
  { id: '006hbd', name: 'Stella Maris College', city: 'Chennai' },
];

export default function SIHCollegeList() {
  return (
    <Box>
      <Typography variant="h2" className={SIHstyles.label4}>
        List Of Colleges
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search Colleges/Institutions/Universities"
        sx={{ my: 2 }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>College ID</TableCell>
              <TableCell>Name of the Institute</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Dashboard</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {collegeData.map((college, index) => (
              <TableRow key={college.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{college.id}</TableCell>
                <TableCell>{college.name}</TableCell>
                <TableCell>{college.city}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small">
                    Click here
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

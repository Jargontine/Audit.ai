import React from 'react';
import { Box, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import SIHstyles from '../css/SIHStyles.module.css';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { red } from '@mui/material/colors';



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
            <Box sx={{ mt: 5, mb: 3 }} width="100%" display="flex" justifyContent="center" alignItems="center" >
                <Typography variant="h2" className={SIHstyles.label13}>
                    List Of Colleges
                </Typography>
            </Box>
            <Box sx={{ mt: 5, mb: 8 }} width="100%" display="flex" justifyContent="center" alignItems="center" >
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800, border: 2, borderRadius: 8, borderColor: 'rgb(232,141,35)' }}>
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search ..." inputProps={{ 'aria-label': 'search' }} />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
            <TableContainer className={SIHstyles.tabledesign} sx={{ mt: 1, ml: 10 }} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow className={SIHstyles.tabledesign}>
                            <TableCell className={SIHstyles.tabledesign}><Box className={SIHstyles.label11}>S.No</Box></TableCell>
                            <TableCell className={SIHstyles.tabledesign}><Box className={SIHstyles.label11}>College ID</Box></TableCell>
                            <TableCell className={SIHstyles.tabledesign}><Box className={SIHstyles.label11}>Name of the Institute</Box></TableCell>
                            <TableCell className={SIHstyles.tabledesign}><Box sx={{ ml: 1.3 }} className={SIHstyles.label11}>City</Box></TableCell>
                            <TableCell className={SIHstyles.tabledesign}><Box sx={{ ml: 12 }} className={SIHstyles.label11}>Dashboard</Box></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className={SIHstyles.tabledesign}></TableCell>
                        </TableRow>
                        {collegeData.map((college, index) => (
                            <TableRow className={SIHstyles.tabledesign} key={college.id}>
                                <TableCell sx={{ mt: 1, mb: 1 }} className={SIHstyles.label12}>{index + 1}</TableCell>
                                <TableCell className={SIHstyles.label12}>{college.id}</TableCell>
                                <TableCell className={SIHstyles.label12}>{college.name}</TableCell>
                                <TableCell className={SIHstyles.label12}>{college.city}</TableCell>
                                <TableCell className={SIHstyles.tabledesign}>
                                    <Box sx={{ ml: 10, mt: 1 }}>
                                        <button type="button" className={SIHstyles.clgreenButton} onClick={() => showPage('See data')}>See data</button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import '../App.css';


const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ borderRadius: '3px' }}>
                <h1 className='logo'>Jquiles</h1>
                <Toolbar style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    }}>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3>Projects</h3>
                </Toolbar>
            </AppBar>
        </Box >
    )
};
export default NavBar;
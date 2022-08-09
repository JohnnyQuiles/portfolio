import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import '../App.css';

const NavBar = () => {
    return (
        <div className="App">
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static" style={{ background: "#011627"}}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1 className='logo'>Jquilesjr</h1>
                </Link>

                <Toolbar style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                }}>

                    <Link className='navbar' to='about' style={{ color: 'white', textDecoration: 'none' }}>
                        <h3 className='navbar'>About</h3>
                    </Link>

                    <Link className='navbar' to='contact' style={{ color: 'white', textDecoration: 'none' }}>
                        <h3 className='navbar'>Contact</h3>
                    </Link>

                    <Link className='navbar' to='projects' style={{ color: 'white', textDecoration: 'none' }}>
                        <h3 className='navbar'>Projects</h3>
                    </Link>

                </Toolbar>
            </AppBar>
        </Box>
        </div>
    )
};

export default NavBar;
import React from 'react'
import NavBar from "../component/NavBar";
import { Box } from '@mui/material';
import '../App.css';

const Layout = (props) => {
    const { children } = props;

    return (
        <div className='App'>
            <Box height="100%" maxWidth="100%" backgroundColor='#F7F9F7'>
                <NavBar />
                <div>{children}</div>
            </Box>
        </div>

    )
};

export default Layout;

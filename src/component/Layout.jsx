import React from 'react'
import NavBar from "../component/NavBar";
import { Box } from '@mui/material';

const Layout = (props) => {
    const { children } = props;

    return (
        <Box height="100%" maxWidth="100%">
            <NavBar />
            <div>{children}</div>
        </Box>
    )
};

export default Layout;

import React from 'react';
import { Box,  Toolbar } from '@mui/material';
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { AiOutlineFacebook } from "@react-icons/all-files/ai/AiOutlineFacebook"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin'
import { Link } from 'react-router-dom';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import '../App.css';

const NavBar = () => {
    return (
        <>
            <Link to='/' style={{ textDecoration: 'none', alignItems: 'center', }}>
                <Header className='me' style={{ fontSize: '50px' }}>Jquilesjr</Header>
            </Link>
            <Toolbar color='secondary'>
                <Container>
                    <Box maxWidth='100%' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <a href='https://github.com/JohnnyQuiles' style={{ color: 'white', fontSize: '50px', }} className='logo'><AiOutlineGithub /></a>
                        <a href='https://www.facebook.com/profile.php?id=100071113208049' style={{ color: '#4267B2', fontSize: '50px', }} className='logo'><AiOutlineFacebook /></a>
                        <a href='https://www.instagram.com/?hl=en' style={{ color: '#fb3958', fontSize: '50px', }} className='logo'><AiOutlineInstagram /></a>
                        <a href='https://www.linkedin.com/in/johnny-quiles-618976191/' style={{ color: '#0077b5', fontSize: '50px', }} className='logo'><AiOutlineLinkedin /></a>
                    </Box>
                </Container>
            </Toolbar>
        </>
        )
};

export default NavBar;
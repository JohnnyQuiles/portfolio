import React from 'react';
import Layout from '../component/Layout';
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { AiOutlineFacebook } from "@react-icons/all-files/ai/AiOutlineFacebook"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin'
import { Box } from '@mui/material';
import Me from '../images/me.jpeg'
import '../App.css';

const Home = () => {
    return (
        <Layout>
            <br />

            <h1 className='sub'>Hello, my name is <br />
                <span className='span'>Johnny Quiles</span></h1>
            
            <Box height='48vh' maxWidth='100%' style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={Me} alt='Me' style={{ borderRadius: '3px' }}></img>
            </Box>

            <br />
            <br />

            <Box maxWidth='100%' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <a href='https://github.com/JohnnyQuiles' style={{ color: 'black', fontSize: '50px', }} className='logo'><AiOutlineGithub /></a>
                <a href='https://www.facebook.com/profile.php?id=100071113208049' style={{ color: '#4267B2', fontSize: '50px', }} className='logo'><AiOutlineFacebook /></a>
                <a href='https://www.instagram.com/?hl=en' style={{ color: '#fb3958', fontSize: '50px', }} className='logo'><AiOutlineInstagram /></a>
                <a href='https://www.linkedin.com/in/johnny-quiles-618976191/' style={{ color: '#0077b5', fontSize: '50px', }} className='logo'><AiOutlineLinkedin /></a>
            </Box>

        </Layout>
    )
};


export default Home;
import React from 'react';
import Layout from '../component/Layout';
import { Box, Container } from '@mui/material';
import '../App.css';

function About() {
    return (
        <Layout>
            <br />
            
            <h1 className='sub'>About Me</h1>
            <br />

            <Container  style={{ alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
            <Box maxWidth='50%'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestias ducimus nostrum adipisci accusamus assumenda sunt maiores sit quas doloremque! Id eligendi voluptates provident obcaecati sed in nostrum autem dicta?</p>
            </Box>
            </Container>


        </Layout>
    )
}
export default About;
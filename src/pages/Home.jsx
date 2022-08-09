import React from 'react';
import Layout from '../component/Layout';
import { Box, Container } from '@mui/material';
import '../App.css';

const Home = () => {
    return (
        <Layout>
            <h1 className='sub'>Hello, my name is <br /> <span className='span'>Johnny Quiles</span></h1>
            <br />

            <Box className='box' maxWidth='35%' style={{ background: '#011627', color: 'white' }}>
                <h1 className='sub'>About me</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, dolorum.
                    Quisquam aspernatur ab, consequuntur assumenda enim accusamus animi aperiam
                    quis dignissimos quidem magni omnis consequatur molestiae. Dolore pariatur quibusdam amet.</p>
            </Box>

            <Box className='box' maxWidth='35%' style={{ background: '#011627', color: 'white' }}>
                <h1 className='sub'>About me</h1>
            </Box>

            <Box className='box' maxWidth='35%' style={{ background: '#011627', color: 'white' }}>
                <h1 className='sub'>About me</h1>
            </Box>
        </Layout>
    )
};


export default Home;
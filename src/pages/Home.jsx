import React from 'react';
import { Popover, Divider, Placeholder, Notification, Message,} from 'rsuite';
import NavBar from '../component/NavBar';
import '../App.css';
import { Box } from '@mui/material';



const Home = () => {

    return (
        <>
            <NavBar />
            

                <Notification closable type="info" header="About Me">
                    <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
                    <h3>I'm a software developer that</h3>
                    <h3>builds with<span className='span'> no limitations!</span></h3>
                </Notification>

            

        </>





    )
};


export default Home;
// eslint-disable-next-line no-lone-blocks
{/* <NavBar /> */ }

// eslint-disable-next-line no-lone-blocks
{/* <br />

<Box maxWidth='100%'sx={{ display: 'flex', justifyContent: 'center' }}>
<Card className='card'>
<h1 className='sub'>Hello, my name is <br /> <span className='span'>Johnny Quiles</span></h1>
<h3 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
    I'm a junior software developer that 
    <br /> 
    enjoys building with nolimitations!
    </h3>
</Card>
</Box> */}
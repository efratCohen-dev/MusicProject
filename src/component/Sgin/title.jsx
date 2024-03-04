import Paper from '@mui/material/Paper';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import {deepOrange,grey} from '@mui/material/colors';
import { Button } from '@mui/material';
const Title=()=>{
    return(
        <>
         <Paper
         sx={{
         position: 'relative',
         backgroundColor: 'grey.900',
         color: '#fff',
         mb: 4,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
         height:"50vh"
         }}
        >
        <Typography variant="h1">welcome to our music</Typography>
        <Typography variant="h4">order to change this to your music
        <Button backgroundColor="deepOrange">sgin in</Button>
        <Button>sgin up</Button>
        </Typography>
        </Paper>
        </>
    )
}
export default Title


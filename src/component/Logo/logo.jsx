import React from 'react';
import {useState} from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import {deepOrange,grey} from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import useSound from "use-sound"; 
import Moti from '../Moti.mp3'
const Logo=()=>{
  const [isplay,setIsPlay]=useState(false)
  const [play, { pause, duration, sound }] = useSound(Moti);
  
  const playingIcon = () => {
    if (isplay) {
      pause(); 
      setIsPlay(false);
    } else {
      play(); 
      setIsPlay(true);
    }
  };
return(
    <>
      <Stack direction="row" spacing={1} justifyContent="flex-end" alignItems="flex-end" color={grey[50]} marginRight={'30px'}>
      <Typography variant="h5">Our</Typography>
      {
        !isplay?<PlayCircleFilledWhiteIcon onClick={()=>playingIcon()} fontSize="large" sx={{ color: deepOrange[500] }}/>
        :<PauseCircleFilledIcon onClick={()=>playingIcon()} fontSize="large" sx={{ color: deepOrange[500] }}/>
      }
      <Typography variant="h5" >music</Typography>
    </Stack>
    </>
)
}
export default Logo
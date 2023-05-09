import React from "react";
import { Stack,Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
const BodyPart = ({item,setbodypart,bodypart}) => {
    return ( 
        <Stack
        direction="column"
        type="button"
        alignItems="center"
        justifyContent="center"
        className ="bodyPart-card"
        sx={
            bodypart === item?{
                borderTop:'3px solid #ff2625',
                backgroundColor:'white',
                borderBottomLeftRadius:'20px',
                width:'200px',
                height:'270px',
                gap :'40px',
                cursor:'pointer'
            }:{
                background:'#fff',
                borderBottomLeftRadius:'20px',
                width:'200px',
                height:'270px',
                gap :'40px',
                cursor:'pointer'

            }
        }
        onClick={()=>{
            setbodypart(item);
            window.scrollTo({top:1800,left:100,behavior:"smooth"});
            
        }}
        >
            <img src ={Icon} alt ="dumbbell" style={{width:'40px',height:'40px'}}/>
            <Typography fontWeight={3} fontSize="24px" textTransform="capitalize">{item}</Typography>
        </Stack>
     );
}
 
export default BodyPart;
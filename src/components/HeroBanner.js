import React from "react";
import {Box,Stack,Typography,Button} from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png';
const HeroBanner = () => {
    return ( 
        <Box sx = {{mt:{lg:'200px', xs:'70px'},ml:{sm:'50px'}}}>
            <Typography fontWeight="400" fontSize="25px" color="#FF2625" mb = "20px">
                Fitness Club
            </Typography>

            <Typography fontWeight={700} fontSize={44} mb = "10px">
                Sweat,Smile <br/> Repeat
            </Typography>
            <Typography fontSize={22} lineHeight="35px" mb ={3}>
                Check out the most effective execises
            </Typography>
            <Button variant="contained" color="error" href ="#exercises" sx ={{backgroundColor:'#ff2625'}}>Explore More!</Button>
            <img src ={HeroBannerImage} alt = "banner" className="hero-banner-img" style ={{height:'600px', width : '500px',margin:'20px 10px 10px'}} />
        </Box>
     );
}
 
export default HeroBanner;
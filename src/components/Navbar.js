import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
    
    return ( 
        <Stack direction="row" justifyContent="space-around"
        sx = {{gap:{sm:'122px',xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none'}} px ="20px">
            <Link to ="/">
                <img src = {Logo} alt ="logo" 
                style ={{width:'50px',height:'50px',margin:'0 20px'}}/>

            </Link>
            <Stack direction="row" fontSize="20px" gap="40px">
                <Link to = "/" style = {{textDecoration:'none',color:"#3A1212",borderBottom:'3px solid red'}}>
                    Home
                </Link>
                <a href = "#exercises" style = {{textDecoration:"none",color:"#3A1212",borderBottom:'3px solid red'}}>
                    Exercises
                </a>
            </Stack>
        </Stack>
     );
}
 
export default Navbar;
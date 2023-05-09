import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";
import Exercises from "../components/Exercises";
const Home = () => {
    const [exercises, setexercises] = useState([]);
    const[bodypart , setbodypart] = useState('all');
    return ( 
        <Box>
            <HeroBanner/>
            <Search setexercises={setexercises} bodypart ={bodypart}
            setbodypart={setbodypart}/>
            <Exercises setexercises={setexercises} bodypart ={bodypart}
            exercises={exercises}/>
        </Box>
     );
}
 
export default Home;
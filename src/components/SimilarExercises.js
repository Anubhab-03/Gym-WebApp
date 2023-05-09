import React from "react";
import {Box, Stack,Typography } from "@mui/material";
import HorizontalBar from "./HorizontalBar";
import Loader from "./Loader";
const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
    return ( 
        <Box sx ={{mt:{lg:'100px' ,xs :'10px'}}}>
            <Typography variant ="h3" mb ="10px">
              Exercises that target the same muscle group  
            </Typography>
            <Stack direction="row" sx ={{p:'2',position:'relative',mb:'20px' }} >
                {targetMuscleExercises.length ?<HorizontalBar data ={targetMuscleExercises}/>
                :<Loader/>}
            </Stack>
            <Typography variant ="h3" mb ="10px">
              Exercises that require the same equipment  
            </Typography>
            <Stack direction="row" sx ={{p:'2',position:'relative' }}>
                {equipmentExercises.length ?<HorizontalBar data ={equipmentExercises}/>
                :<Loader/>}
            </Stack>
        </Box>
     );
}
 
export default SimilarExercises;
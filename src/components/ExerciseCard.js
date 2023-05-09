import React from "react";
import { Link } from "react-router-dom";
import { Button,Stack,Typography } from "@mui/material";
const ExerciseCard = ({exercise}) => {
  
    return ( 
      <Link to={`/exercise/${exercise.id}`} className="exercise-card">
        <img src ={exercise.gifUrl} alt ={exercise.name}/>
        <Stack direction="row">
            <Button sx ={{ml:'20px' ,color:'blue',fontSize:'10px',backgroundColor:'yellow' }}>
              {exercise.bodyPart}
            </Button>
            <Button sx ={{ml:'20px' ,color:'blue',fontSize:'10px',backgroundColor:'yellow' }}>
              {exercise.target}
            </Button>
            

        </Stack>
        <Typography sx ={{ml:'20px' ,color:'red',fontSize:'15px',textTransform:'capitalize' }}>
              {exercise.name}
            </Typography>

      </Link>
      
     );
}
 
export default ExerciseCard;
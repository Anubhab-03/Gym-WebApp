import React,{useEffect,useState} from "react";
import { Pagination } from "@mui/material";
import { Box,Stack,Typography } from "@mui/material";
import { exerciseoptions,fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
const Exercises = ({exercises,setexercises,bodypart}) => {
    const[currentpage,setcurrentpage] = useState(1);
    const paginate=(e,value)=>{
        setcurrentpage(value);
        window.scrollTo({top:'1000' ,behaviour:'smooth'})
    }
    useEffect(()=>{
        const fetchexercisedata = async()=>{
            let exercisedata =[];

            if(bodypart==='all'){
                exercisedata = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseoptions);
            }
            else{
                exercisedata = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`, exerciseoptions);
            }

            setexercises(exercisedata);
        }
        fetchexercisedata();
    },[bodypart]);
    const iol = currentpage*9;
    const iof = iol -9;
    const curexercises = exercises.slice(iof,iol);
    console.log(exercises);
    return ( 
        <Box id ="exercises"
        sx={{mt:{lg:'110px'}}}
        mt="50px"
        p="20px">
            <Typography variant="h3" mb ="40px">
                Results
            </Typography>
            <Stack direction="row" 
            sx={{gap:{lg:'100px',xs :'50px'}}}
            flexWrap="wrap" justifyContent="center">
                {curexercises.map((exercise,index)=>(
                    <ExerciseCard key={index} exercise ={exercise}/>
                ))}

            </Stack>
            <Stack mt ="100px" alignItems="end">
                {exercises.length >9 && (
                    <Pagination color="standard" shape="rounded"
                    count = {Math.ceil(exercises.length/9)}
                    page={currentpage}
                    onChange={paginate}
                    size="large"/>
                )}

            </Stack>
        </Box>
     );
}
 
export default Exercises;
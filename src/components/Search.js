import React from "react";
import { useEffect, useState } from "react";
import { Box, Stack, Typography, Textfield, TextField, Button } from "@mui/material";
import { exerciseoptions, fetchData } from "../utils/fetchData";
import HorizontalBar from "./HorizontalBar";
const Search = ({setexercises,bodypart,setbodypart}) => {
    const [search, setsearch] = useState('');
    
    const [bodyParts, setbodyparts] = useState([]);
    useEffect(() => {
        const fetchexercisesdata = async () => {
            const bodypartsdata = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseoptions);
            setbodyparts(['all', ...bodypartsdata]);
        }

        fetchexercisesdata();
    }, [])
    const handlesearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseoptions);
            const searchedexercises = exercisesData.filter(
                (exercise) => 
                    exercise.name.toLowerCase().includes(search) ||
                        exercise.target.toLowerCase().includes(search) ||
                        exercise.equipment.toLowerCase().includes(search) ||
                        exercise.bodyPart.toLowerCase().includes(search)
                
            );

            setsearch('');
            setexercises(searchedexercises);

        }
    }

return (
    <Stack alignItems="center" mt="40px" justifyContent="center" p="20px">
        <Typography fontWeight={600} sx={{ fontSize: { lg: '40px', sm: '20px' } }} textAlign="center" mb='30px'>
            Awesome Exercise <br /> You should know
        </Typography>
        <Box position="relative" mb="20px">
            <TextField sx={{
                input: { fontWeight: '700', border: 'none', },
                width: { lg: '800px', sm: '400px' }, mb: '10px'
            }} height="70px" value={search} onChange={(e) => setsearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises" type="text" >


            </TextField>

            <Button className="search"
                sx={{
                    backgroundColor: 'blue', color: 'white', textTransform: 'none', position: "absolute", right: '0', height: '56px',
                    width: { lg: '100px', sm: '20px' }
                }} onClick={handlesearch}>
                Search
            </Button>
        </Box>
        <Box sx ={{position:'relative',width:'100%',p:'10px'}}>
                <HorizontalBar data ={bodyParts} bodypart = {bodypart} setbodypart = {setbodypart} isBodyParts/>
        </Box>
    </Stack>
);
            }

export default Search;
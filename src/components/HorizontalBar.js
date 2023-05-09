import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu,VisibilityContext } from "react-horizontal-scrolling-menu";
import ExerciseCard from "./ExerciseCard";
const HorizontalBar = ({data,bodypart,setbodypart,isBodyParts}) => {
    return ( 
        
        <ScrollMenu>
            {data.map((item)=>(
                <Box
                key ={item.id||item}
                itemId = {item||item.id}
                title={item||item.id}
                m="0 40px"
                >
                    {isBodyParts?<BodyPart item ={item} bodypart = {bodypart} setbodypart ={setbodypart}/>
                    :<ExerciseCard exercise={item}/>}
                </Box> 
            ) 
            )}
        </ScrollMenu>
     );
}
 
export default HorizontalBar;
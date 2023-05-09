import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { BorderBottom, BorderColor } from "@mui/icons-material";

const Detail = ({ exerciseDetail }) => {
    //desctructuring of objects
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extradetail =[{
        icon:BodyPartImage,
        name :bodyPart
    },

    {
        icon:TargetImage,
        name :target
    },

   
    ]
    return (
        <Stack gap="60px"
            sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' ,} }>
            <img src={gifUrl} alt={name} className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize"
                style={{borderBottom:'3px solid red'}}>
                    {name}
                </Typography>
                <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} fontWeight ={50} color="#4F4C4C" >
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                    of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </Typography>
                {extradetail.map((item)=>(
                    <Stack key ={item.name } direction="row" gap="20px" alignItems="center">
                        <Button>
                            <img src ={item.icon}/>

                        </Button>

                        <Typography fontSize='30px'>{item.name}</Typography>
                    </Stack>    
                ))}
            </Stack>
        </Stack>
    );
}

export default Detail;
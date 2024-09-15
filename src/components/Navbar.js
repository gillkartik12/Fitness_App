import React from 'react'
import {Link} from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';
{/* Stack is used when you want to use menu or list of items */}
{/* ui/material is great for building websites quickly and professionally */}
{/**mt= margin top, sm= small device, xs = extra small device, */}


const ExerciseTabClick = (currentUrl) => {
 const searchText = "/calorie";
const containsText = currentUrl.includes(searchText);
  if(containsText){
    window.location.href = "/Fitness_App/#exercises";
  } else  {    
    window.location.href = "#exercises";
  }
}
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" 
    sx={{gap: {sm: '122px', xs:'40px'}, mt: {sm:'32px',
      xs:'20px'
    }, justifyContent:'none'
  }} px="20px"
    >
      <Link to = "/Fitness_App/">
         <img src={Logo} alt="logo" style={{
          width: '48px', height: '48px', margin: '0 20px'
         }} />     
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
      <Link to="/Fitness_App/" style={{textDecoration: 'none',
        color: '#3A1212', borderBottom: '3px solid #FF2625'
      }}>Home</Link>
      <a href="#exercises" onClick={() => ExerciseTabClick(window.location.pathname)} style={{
        textDecoration: 'none', color: '#3A1212'
      }}>Exercises</a>
      <a href="/calorie" style={{
        textDecoration: 'none', color: '#3A1212'
      }}>Calorie Calculator</a>
    </Stack>
    </Stack>
    
  )
}

export default Navbar
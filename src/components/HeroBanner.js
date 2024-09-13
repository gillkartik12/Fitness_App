import React from 'react';
import {Box,Button,Stack} from '@mui/material';
import {Typography} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'
{/* Typography is an MUI component that standardizes all the categories of text. It maintains consistency with respect to size, font family, color, etc. among all the variants of text like title, subtitle, caption, etc. throughout your application.  */}

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs:'70px'},
      ml: {sm: '50px'}
    }} position = "relative" p="20px">
      <Typography color='#FF2625' fontWeight="600px" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px'}}}
      mb="23px" mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px"
      mb={4}      
      > Check out the most effective exercises.
      </Typography>
      <Button variant='contained'
      color="error"
      href="#exercises"
      sx={{
        backgroundColor: '#ff2625', padding: "10px"
      }}
      >
        Explore Exercises
      </Button>
      <Typography 
      fontWeight={600}
      color="#ff2625"
      sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'},
        
      }}
      fontSize="200px"
      >
        Excercises
      </Typography>
      <img src={HeroBannerImage} alt="banner"
      className="hero-banner-img"
      ></img>
    </Box>
  )
}

export default HeroBanner
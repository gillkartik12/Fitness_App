import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData'; 
import HorizontalScrollbar from './HorizontalScrollbar';
import { Link } from 'react-router-dom';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

const [search, setSearch] = useState('');
const[bodyParts, setBodyParts] = useState([]);

useEffect(() => {

  const fetchExercisesData = async () => {
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

    setBodyParts(['all', ...bodyPartsData])
  }

  fetchExercisesData();
}, [])
{/* this will async function as we need to fetch some data
  Async simply means this function is going to take some time and most cases it is going to pull some data from api */}
const handleSearch = async () => {            
if(search) {
  const exercisesData = await fetchData(
    'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions
  );

  const searchedExercises = exercisesData.filter(
    (exercise) => exercise.name.toLowerCase().includes(search)
    || exercise.target.toLowerCase().includes(search)
    || exercise.equipment.toLowerCase().includes(search)
    || exercise.bodyPart.toLowerCase().includes(search)
  )
  setSearch('');
  setExercises(searchedExercises);
}
} 

const handleSearchWithEnterKey = (e) => {
      if (e.key === "Enter"){
        e.preventDefault();
        handleSearch();
        window.location.href = "#exercises";
      }
    }
  


  return (
    <Stack alignItems='center' mt="37px"
    justifyContent="center" p="20px"
    >
      <Typography fontWeight={700} sx={{
        fontSize: { lg:'44px', xs: '30px'}
      }}
      mb="50px" textAlign="center"
      >
        Awesome Exercises You Should Know <br />
      </Typography>
      <Box position="relative" mb="72px">
        <TextField 
        sx={{
          input: { fontWeight: '700',
              border: 'none', 
              borderRadius: '4px'},
              width: {lg: '1170px' , xs: '350px'},
              backgroundColor: '#fff',
              borderRadius: '40px'          
        }}
        height = "76px"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onKeyDown={handleSearchWithEnterKey}
        placeholder="SearchExercises"
        type="text"
        />
        <Button className="search-btn"
        sx={{
          bgcolor:'#FF2625',
          color: '#fff',
          textTransform: 'none',
          width: {lg: '175px', xs: '80px'},
          fontSize: {lg:'20px' , xs:'14px'},
          height: '56px', 
          position: "absolute",
          right: '0'
        }}
        onClick={handleSearch}        
        href="#exercises"
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position:'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart = {setBodyPart} isBodyParts></HorizontalScrollbar>

      </Box>
    </Stack>
  )
}

export default SearchExercises
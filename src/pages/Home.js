import React, {useState} from 'react';
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercise from '../components/Exercise';
import CalorieCalculator from '../components/CalorieCalculator';

const Home = () => {
 const [bodyPart, setBodyPart] = useState('all') 
const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises= {setExercises} bodyPart= {bodyPart} setBodyPart={setBodyPart} />
      <Exercise setExercises= {setExercises} bodyPart= {bodyPart} exercises={exercises} />
      <CalorieCalculator />
    </Box>
  )
}

export default Home
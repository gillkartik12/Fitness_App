import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Stack } from "@mui/material";

const calculateCalories = (weight, height, age, activityLevel, setCalories) => {
  // Assuming the user is female; adjust for male if needed
  const bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  const totalCalories = bmr * activityLevel;
  setCalories(totalCalories.toFixed(2));
};

const CalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("1.2"); // Sedentary as default
  const [calories, setCalories] = useState(null);
  return (
    <Link className="calorie-calculate" to="/Fitness_App/calorie">
      <div className="App" style={{
           marginTop: '60px'
         }}>
      
        <h1><span style={{color:"#ff2625", fontSize:"38px"}}>Calorie Calculator</span></h1>
        <div>
          <label>
          <span style={{color:"#000000", fontSize:"18px"}}>Age (years):</span>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
          <span style={{color:"#000000", fontSize:"18px"}}>Weight (kg):</span>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
          <span style={{color:"#000000", fontSize:"18px"}}> Height (cm):</span>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
          <span style={{color:"#000000", fontSize:"18px"}}>Activity Level:</span>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="1.2">Sedentary (little or no exercise)</option>
              <option value="1.375">
                Lightly active (light exercise/sports 1-3 days/week)
              </option>
              <option value="1.55">
                Moderately active (moderate exercise/sports 3-5 days/week)
              </option>
              <option value="1.725">
                Very active (hard exercise/sports 6-7 days a week)
              </option>
              <option value="1.9">
                Extra active (very hard exercise/sports & physical job)
              </option>
            </select>
          </label>
        </div>
        <button 
          onClick={() =>
            calculateCalories(weight, height, age, activityLevel, setCalories)
          }
        >
          Calculate
        </button>
        {calories !== null && (
          <div>
            <h2>Estimated Daily Calorie Needs: <span style={{
          color:"#ff2625"
         }}>{calories} kcal</span></h2>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CalorieCalculator;

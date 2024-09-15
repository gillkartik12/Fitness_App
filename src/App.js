import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CalorieCalculator from "./pages/CalorieCalculator";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      {" "}
      {/*sx make sure this device is responsive on larger devices*/}
      <Navbar />
      <Routes>
        <Route path="/Fitness_App/" element={<Home />} />{" "}
        {/*to setup home page using route*/}
        <Route path="/exercise/:id" element={<ExerciseDetail />} />{" "}
        {/*here :id means we can dynamically id like 1,2,3 etc*/}
        <Route path="/calorie" element={<CalorieCalculator />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

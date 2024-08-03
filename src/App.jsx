import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
import Exercises from "./components/Exercises";

function App() {
  return (
    <div className="w-96 m:w-auto lg:w-1488px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/exercise" element={<Exercises />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;

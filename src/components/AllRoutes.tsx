import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Game from './Game';
import Instructions from './Instructions';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Info from './Info';

const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>} ></Route>
     <Route path="/game" element={<Game/>} ></Route>
     <Route path="/instructions" element={<Instructions/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/signup" element={<Signup/>} ></Route>
     <Route path="/info" element={<Info/>} ></Route>
    </Routes>
  )
}

export default AllRoutes
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import {  Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';

import { connect } from 'react-redux';



function App(){
  return (
   <>
   <Container>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Homepage/>}/>
        
        </Routes>
        </Container>
     
       
    
      
   </>
  );
}

export default App;

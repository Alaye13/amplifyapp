import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Card from './Card';
import Contact from './Contact';
import Home from './Home';
import './App.css';

function App() {

  // Determine whether to show the "Home" content

  return (

    
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="NavBar" element={<NavBar />} />
          <Route path="contact" element={<Contact />} />
          <Route path="card" element={<Card />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>


      {/* The rest of your components and content */}
    </div>
  );
}

export default App;

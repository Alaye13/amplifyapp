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
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="NavBar" element={<NavBar />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Card" element={<Card />} />
          <Route path="Home" element={<Home />} />
        </Routes>
      </BrowserRouter>


      {/* The rest of your components and content */}
    </div>
  );
}

export default App;

import React from 'react';
import NavBar from './NavBar';
import Card from './Card';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '70px' }}>
        <Card color="red" />
        <Card color="blue" />
        <Card color="green" />
      </div>
    </div>
  );
}

export default App;

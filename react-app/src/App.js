import React from 'react';
import './App.css';

// Imaginary PC components
import CPU from './CPU'; // Import CPU component
import GPU from './GPU'; // Import GPU component
import RAM from './RAM'; // Import RAM component
import SSD from './SSD'; // Import SSD component
import HDD from './HDD'; // Import HDD component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Powerful Gaming PC</h1>
      </header>
      <div className="parts-container">
        <CPU name="Intel Core i9-12900K" cores={16} clockSpeed="5.2 GHz" />
        <GPU name="NVIDIA GeForce RTX 3090" vram="24 GB GDDR6X" />
        <RAM name="Corsair Vengeance RGB Pro" capacity="64 GB" speed="3600 MHz" />
        <SSD name="Samsung 980 Pro" capacity="2 TB" />
        <HDD name="Seagate Barracuda" capacity="4 TB" />
      </div>
    </div>
  );
}

export default App;

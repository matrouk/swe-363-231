import React from 'react';

const RAM = ({ name, capacity, speed }) => {
  return (
    <div className="pc-component">
      <h2>RAM</h2>
      <p>Name: {name}</p>
      <p>Capacity: {capacity}</p>
      <p>Speed: {speed}</p>
      {/* Add more RAM specifications */}
    </div>
  );
};

export default RAM;

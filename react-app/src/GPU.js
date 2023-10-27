import React from 'react';

const GPU = ({ name, vram }) => {
  return (
    <div className="pc-component">
      <h2>GPU</h2>
      <p>Name: {name}</p>
      <p>VRAM: {vram}</p>
      {/* Add more GPU specifications */}
    </div>
  );
};

export default GPU;

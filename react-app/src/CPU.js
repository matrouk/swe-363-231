import React from 'react';

const CPU = ({ name, cores, clockSpeed }) => {
  return (
    <div className="pc-component">
      <h2>CPU</h2>
      <p>Name: {name}</p>
      <p>Cores: {cores}</p>
      <p>Clock Speed: {clockSpeed}</p>
    
    </div>
  );
};

export default CPU;

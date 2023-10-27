import React from 'react';

const HDD = ({ name, capacity }) => {
  return (
    <div className="pc-component">
      <h2>HDD</h2>
      <p>Name: {name}</p>
      <p>Capacity: {capacity}</p>
      {/* Add more HDD specifications */}
    </div>
  );
};

export default HDD;

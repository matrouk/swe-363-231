import React from 'react';

const SSD = ({ name, capacity }) => {
  return (
    <div className="pc-component">
      <h2>SSD</h2>
      <p>Name: {name}</p>
      <p>Capacity: {capacity}</p>
      {/* Add more SSD specifications */}
    </div>
  );
};

export default SSD;

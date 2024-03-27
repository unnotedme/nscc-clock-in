// InputHours.js
import React, { useState } from 'react';

const InputHours = ({ onSave, onCancel }) => {
  const [hours, setHours] = useState('');

  const handleSave = () => {
    // Check if hours is not empty and is a valid number
    if (hours.trim() !== '' && !isNaN(hours)) {
      onSave(parseFloat(hours));
      setHours('');
    } else {
      alert('Please enter a valid number of hours.');
    }
  };

  return (
    <div>
      <h2>Input Working Hours</h2>
      <input
        type="number"
        placeholder="Enter hours worked"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default InputHours;

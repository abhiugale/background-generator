import React from 'react';

function GradientTypeSelector({ gradientType, setGradientType }) {
  return (
    <div className="gradient-type-selector">
      <label>
        <input
          type="radio"
          value="linear"
          checked={gradientType === 'linear'}
          onChange={(e) => setGradientType(e.target.value)}
        />
        Linear
      </label>
      <label>
        <input
          type="radio"
          value="radial"
          checked={gradientType === 'radial'}
          onChange={(e) => setGradientType(e.target.value)}
        />
        Radial
      </label>
    </div>
  );
}

export default GradientTypeSelector;

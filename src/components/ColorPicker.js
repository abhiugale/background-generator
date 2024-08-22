import React from 'react';

function ColorPicker({ colors, setColors }) {
  const handleColorChange = (index, color) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  return (
    <div className="color-picker">
      {colors.map((color, index) => (
        <input
          key={index}
          type="color"
          value={color}
          onChange={(e) => handleColorChange(index, e.target.value)}
        />
      ))}
    </div>
  );
}

export default ColorPicker;

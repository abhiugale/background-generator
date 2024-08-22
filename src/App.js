import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import GradientTypeSelector from './components/GradientTypeSelector';
import Preview from './components/Preview';
import './App.css';

function App() {
  const [colors, setColors] = useState(['#ff0000', '#0000ff']);
  const [gradientType, setGradientType] = useState('linear');

  return (
    <div className="App">
      <h1>Background Generator</h1>
      <ColorPicker colors={colors} setColors={setColors} />
      <GradientTypeSelector gradientType={gradientType} setGradientType={setGradientType} />
      <Preview colors={colors} gradientType={gradientType} />
    </div>
  );
}

export default App;

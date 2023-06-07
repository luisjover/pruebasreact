import { useState } from 'react'
import './App.css'
import { ColorSelector } from './components/ColorSelector';

export function App() {
  const [currentColor, setCurrentColor] = useState("red");

  return (
    <div>
      <h1 style={{ color: currentColor }}>Selected size: {currentColor}</h1>
      <ColorSelector
        selectedColor={currentColor}
        onColorChange={(color) => setCurrentColor(color)} //(size) => setCurrentSize(size) === setCurrentSize   //true
      />
    </div>
  )
}


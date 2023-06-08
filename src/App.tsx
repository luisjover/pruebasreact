import { useState } from 'react'
import './App.css'
import { SizeSelector } from './components/sizeSelector';

export function App() {
  const [currentSize, setCurrentSize] = useState("");

  return (
    <div>
      <h1>Selected Size: {currentSize}</h1>
      <SizeSelector
        selectedSize={currentSize}
        onSizeChange={(size) => setCurrentSize(size)}
      />
    </div>
  )
}



import { useEffect, useState } from 'react'
import './App.css'
import { SizeSelector } from './components/sizeSelector';

export function App() {
  const initialColor: string = "black"
  const [currentSize, setCurrentSize] = useState("");
  const [currentColor, setCurrentColor] = useState(initialColor);
  const [currentName, setCurrentName] = useState<string | null>(null);

  useEffect(() => {

    if (currentSize !== "") {
      const timer = setTimeout(() => {
        setCurrentColor("red");
      }, 5000)

      return () => {
        clearTimeout(timer);
        setCurrentColor(initialColor);
      }
    }
  }, [currentSize])

  useEffect(() => {
    setCurrentName(currentColor === "red" ? "red" : null)
  }, [currentColor])

  return (
    <div>
      <h1 id='h1' style={{ color: currentColor }}>Selected Size: {currentSize}</h1>
      <SizeSelector
        selectedSize={currentSize}
        name={currentName}
        onSizeChange={(size) => setCurrentSize(size)}
      />
    </div>
  )
}



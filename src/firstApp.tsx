import './App.css'
import { useState } from 'react'
import { ColorSelector } from './components/ColorChanger';

export const MyFirstApp = () => {

    const [currentColor, setCurrentColor] = useState("red");

    return (

        <div>
            <h1 style={{ color: currentColor }}>
                My First App
            </h1>
            <ColorSelector
                selectedColor={currentColor}
                onColorChange={(color) => setCurrentColor(color)}
            />
        </div>

    )
}
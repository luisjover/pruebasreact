import { FC } from "react";
import "./ColorSelector.css";

const possibleColors: Array<string> = ["yellow", "blue", "brown", "green", "grey", "pink"];

interface Props {
    selectedColor: string;
    onColorChange: (color: string) => void;
}

export const ColorSelector: FC<Props> = ({ selectedColor, onColorChange }) => {

    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
            {
                possibleColors.map(color => (
                    <button
                        style={selectedColor !== color ? { backgroundColor: color } : { backgroundColor: "black" }}
                        key={color}
                        className={selectedColor === color ? 'active' : ""}
                        onClick={() => onColorChange(color)}
                    >
                        {color}
                    </button>
                ))
            }
        </div>
    )
}
import { FC } from "react";

const possibleColors = ["yellow", "purple", "green", "orange", "pink", "blue"];

interface Props {
    selectedColor: string;
    onColorChange: (color: string) => void;
}


export const ColorSelector: FC<Props> = ({ selectedColor, onColorChange }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {
                possibleColors.map(color => (
                    <button
                        key={color}
                        className={selectedColor === color ? "active" : ""}
                        onClick={() => onColorChange(color)}
                    >
                        {color}
                    </button>
                ))
            }

        </div>
    )
}
import { FC } from "react";

const possibleSizes = ["XS", "S", "M", "L", "XL", "XXL"];

interface Props {
    selectedSize: string;
    name: string | null;
    onSizeChange: (size: string) => void;
    //onColorChange: (name: string | null) => void;
}


export const SizeSelector: FC<Props> = (props) => {
    
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {
                possibleSizes.map(size => (
                    <button
                        key={size}
                        className={props.selectedSize === size ? "active" : ""}
                        onClick={() => props.onSizeChange(size)}
                    >
                        {props.name !== null && props.selectedSize === size ? props.name : size}
                    </button>
                ))
            }

        </div>
    )
}
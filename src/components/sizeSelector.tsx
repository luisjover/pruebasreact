import { FC } from "react";

const possibleSizes = ["XS", "S", "M", "L", "XL", "XXL"];

interface Props {
    selectedSize: string;
    onSizeChange: (size: string) => void;
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
                        {size}
                    </button>
                ))
            }

        </div>
    )
}
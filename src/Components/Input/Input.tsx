import React from "react";
type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };
    return (
        <div>
            <h2>handle change event in App </h2>
            <input
                type="text"
                value={props.value}
                onChange={props.handleChange}
            />
            <h2>handle change event is not in App </h2>
            <input
                type="text"
                value={props.value}
                onChange={handleInputChange}
            />{" "}
        </div>
    );
};

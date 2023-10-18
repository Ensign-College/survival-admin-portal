import React, { useState } from 'react';

interface ToggleProps {
    onChange: (value: boolean) => void;
}

const ToggleButton = (props: ToggleProps) => {
    const [value, setValue] = useState(false);

    const handleClick = () => {
        const newValue = !value;
        setValue(newValue);
        props.onChange(newValue);
    };

    const toggleClass = "transform translate-x-6";

    return (
        <div
            onClick={handleClick}
            className={`md:h-7 w-14 h-6 flex items-center ${
                value ? "bg-zinc-600" : "bg-stone-300"
            } rounded-full p-1 cursor-pointer`}
        >
            {/* Switch options */}
            <div
                className={`${value ? "bg-slate-800" : "bg-zinc-50"}
                    md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transition transform ${
                    value ? toggleClass : null
                }`}
            ></div>
        </div>
    );
};

export default ToggleButton;
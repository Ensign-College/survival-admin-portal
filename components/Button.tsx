//I am adding a button component here
import React from 'react';


// button.11ty.js
const { cva } = require("class-variance-authority");
 
// ⚠️ Disclaimer: Use of Tailwind CSS is optional
const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "px-4",
        "py-2",
        "font-bold",
        "text-white",
        "bg-blue-500",
        "rounded",
        "hover:bg-blue-700",
        "focus:outline-none",
        "focus:shadow-outline",
      ],
      secondary: [
        "px-2",
        "mr-1",
        "bg-transparent",
        "rounded text-slate-400", 
        "hover:bg-teal-600", 
        "hover:text-white"
      ],
      third: [
        "px-2",
        "mr-1",
        "bg-transparent",
        "rounded",
        "text-slate-400",
        "hover:bg-red-400",
        "hover:text-white",
        // Add any additional classes specific to the third variant here
      ],
      // Add an SVG element for the icon here, e.g., you can replace this with your SVG code
    //   content: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-red-600 group-hover:fill-red-600 group-hover:text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`
      
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  color?: "primary" | "secondary" | "third"; // three styling options
  disabled?: boolean; // make the button disabled or not
  text:string;
};

export const Button = ({
  onClick,
  children,
  color = "primary",
  disabled,
}: ButtonProps) => {
  return (
    <div className="group">
        <button className={button({ intent: color, size: "medium" })} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    </div>
  );
};


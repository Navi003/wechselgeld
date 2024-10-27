import React from "react";

const Input = ({ onChange, className, ...props }, ref) => {
  return (
    <input
      {...props}
      className={` 
        border-0 
        outline-none 
        focus:outline-blue-500 
        focus:ring-0 
        hover:scale-105 
        transition-transform 
        duration-150 
        ease-in-out 
        ${className} 
      `}
      onChange={onChange}
      style={{ textAlign: "center" }} //
    />
  );
};

export default Input;

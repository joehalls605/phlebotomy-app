import React from "react";

const Button = ({text, onClick}) => {

return(
    <div>
        <button className="bg-gray-100 border-solid border-2 border-gray text-xl 
        px-4 rounded hover:bg-gray-200 hover:border-gray-300
        " onClick={onClick}>{text}</button>
    </div>
)
}
export default Button;
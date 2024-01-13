import React from "react";

const Button = ({text}) => {

return(
    <div>
        <button className="bg-gray-100 border-solid border-2 border-gray text-xl 
        px-4 rounded 
        ">{text}</button>
    </div>
)
}
export default Button;
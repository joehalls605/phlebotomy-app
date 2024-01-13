import React from "react";
import '../App.css';

const Footer = () => {
    return(
       <footer className="bg-gray-100 text-black p-4 flex justify-between items-center fixed bottom-0 w-full">
        <p className="text-xs">&copy; {new Date().getFullYear()} Phleboto. All rights reserved</p>
       </footer>
    )

}

export default Footer;
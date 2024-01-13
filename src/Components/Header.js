import React from "react";
import '../App.css';

const Header = () => {
    return(
        <header className="bg-gray-100 text-black p-4 flex justify-between items-center">
            <div>
                <h1>Phleboto</h1>
            </div>
            <div>
                <nav>
                    <ul className="flex space x-5">
                        <li>About</li>
                        <li className="ml-2">Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header;
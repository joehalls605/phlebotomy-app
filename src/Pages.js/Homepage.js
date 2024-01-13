import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

const Homepage = ({setGameStarted}) => {

    const handleCategoryClick = () =>{
        setGameStarted(true);
    }
    
    return(
        <div>
        <Header/>
        <div  className="flex flex-col items-center p-4 space-y-4">
        <h1 className="text-xl">Choose your category:</h1>
        <Button text={"Phlebotomy Procedures"} onClick={handleCategoryClick}/>
        <Button text={"Anatomy and Physiology"} onClick={handleCategoryClick}/>
        <Button text={"Safety and Infection Control"} onClick={handleCategoryClick}/>
        <Button text={"Equipment and Supplies"} onClick={handleCategoryClick}/>
        </div>
        <Footer/>
        </div>
    )
}

export default Homepage;
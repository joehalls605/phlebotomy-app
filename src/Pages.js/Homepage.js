import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

const Homepage = ({setGameStarted}) => {
    
    return(
        <div>
        <Header/>
        <Button text={"Phlebotomy Procedures"}/>
        <Button text={"Anatomy and Physiology"}/>
        <Button text={"Safety and Infection Control"}/>
        <Button text={"Equipment and Supplies"}/>
        <Footer/>
        </div>
    )
}

export default Homepage;
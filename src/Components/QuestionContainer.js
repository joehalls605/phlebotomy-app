import React from "react";
import useQuestion from "../Hooks/useQuestion";
import Button from "./Button";

const QuestionContainer = ({phlebotomyQuestionsData, selectedCategory}) => {

    const {correctButton, questionButtons} = useQuestion(phlebotomyQuestionsData, selectedCategory);


    return(
    <div className= "bg-gray-300 flex flex-col items-center h-96">
        <h1>Question Container</h1>
        <div className="grid grid-cols-2 gap-10 p-4">
            {questionButtons.map((answer, index) => {
                <Button 
                key={index}
                answer={answer}
                text={answer}
                />
                
            })}
        </div>
    </div>)

}

export default QuestionContainer;
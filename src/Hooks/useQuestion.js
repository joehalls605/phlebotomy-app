import React, { useState, useEffect } from "react";

const useQuestion = (phlebotomyQuestionsData, selectedCategory) => {
    
    const [correctAnswerButton, setCorrectAnswerButton] = useState(null);
    const [questionButtons, setQuestionButtons] = useState([]);

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        shuffledArray.sort(() => Math.random() - 0.5);
        return shuffledArray;
      };

    useEffect(()=>{

        const generateQuestion = () => {

            // Generate question anwers
            const filteredQuestionButtonsData = phlebotomyQuestionsData.filter((question) => question.category === selectedCategory);
            const randomIndex = Math.floor(Math.random() * filteredQuestionButtonsData.length);
            const correctAnswer = filteredQuestionButtonsData[randomIndex]
            const shuffledAnswers = filteredQuestionButtonsData.filter(
                (question) =>{
                    question.question !== correctAnswer.question &&
                    question.correctAnswer !== correctAnswer.correctAnswer
                }
            ).sort(() => Math.random() - 0.5);

            const selectedAnswers = [correctAnswer, ...shuffledAnswers.slice(0,3)];
            const randomisedSelectedAnswers = shuffleArray(selectedAnswers);

            setCorrectAnswerButton(correctAnswer);
            setQuestionButtons(randomisedSelectedAnswers);
           

    };

    generateQuestion();
}, [phlebotomyQuestionsData, selectedCategory]);

return {correctAnswerButton, questionButtons};

}
export default useQuestion;




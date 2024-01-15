import logo from './logo.svg';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Question from './Components/QuestionContainer';
import QuestionContainer from './Components/QuestionContainer';
import Homepage from './Pages.js/Homepage';
import { useState } from 'react';
import phlebotomyQuestionsData from './Data/phlebotomyQuestions';

function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [category, setCategory] = useState(null);

  return (
    <div>
      {gameStarted ? (
        <>
          <Header />
          <QuestionContainer selectedCategory={category}  phlebotomyQuestionsData={phlebotomyQuestionsData} />
          <Footer />
        </>
      ): (
        <Homepage setGameStarted={setGameStarted}/>
      )}
    </div>
  );
}

export default App;

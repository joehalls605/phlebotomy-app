import logo from './logo.svg';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Question from './Components/QuestionContainer';
import QuestionContainer from './Components/QuestionContainer';
import Homepage from './Pages.js/Homepage';
import { useState } from 'react';

function App() {

  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div>
      {gameStarted ? (
        <>
          <Header />
          <QuestionContainer />
          <Footer />
        </>
      ): (
        <Homepage setGameStarted={setGameStarted}/>
      )}
    </div>
  );
}

export default App;

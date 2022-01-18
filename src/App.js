import './App.css';
import { useState } from 'react';
import MainMenu from './components/MainMenu';
// import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './Helpers/Context'
import Appp from './App1';

function App() {

  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);

  return ( 
    <div className="app-wrapper">
      <h1>Quiz App</h1>
    <QuizContext.Provider value={{gameState, setGameState, score, setScore}} >
      {gameState ==='menu' && <MainMenu/>}
      {gameState === 'quiz' && <Appp/>}
      {gameState === 'endScreen' && <EndScreen/>}
    </QuizContext.Provider>
      
    </div>
  );
}

export default App;

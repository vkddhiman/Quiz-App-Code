import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/Question';
import '../App.css'


export default function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState('menu');
  } 

  return (
    <div className='EndScreen'>
      <h1>
        Quiz Finished
      </h1> 
      <h3 className='EndScreen' >
        {score}/{Questions.length}
        <button onClick={restartQuiz} > Restart Quiz </button>
      </h3>
    </div>
  )
}

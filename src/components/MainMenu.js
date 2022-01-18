import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import '../App1.css'

export default function MainMenu() {

  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className='Menu' >
      <button className="next-button" onClick={() => {
        setGameState('quiz')
      }} >
        Start Quiz
      </button>
    </div>
  )
}

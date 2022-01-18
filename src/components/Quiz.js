import React, { useState, useContext } from 'react'
import { Questions } from '../Helpers/Question';
import { QuizContext } from '../Helpers/Context'

export default function Quiz() {

  const [currQuestion , setCurrQuestion] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState('');
  const { score, setScore, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if(Questions[currQuestion].Answer === optionChoosen){
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  }

  const finishQuiz = () => {
    if(Questions[currQuestion].Answer === optionChoosen){
      setScore(score + 1);
    }
    setGameState('endScreen');
  }

  return (
    <div className='Quiz' >
      <h1>
        Q. {Questions[currQuestion].prompt}
      </h1>
        <div className="options">
          <button onClick={() => setOptionChoosen('OptionA')} >
            {Questions[currQuestion].OptionA}
          </button>
          <button onClick={() => setOptionChoosen('OptionB')} >
            {Questions[currQuestion].OptionB}
          </button>
          <button onClick={() => setOptionChoosen('OptionC')} >
            {Questions[currQuestion].OptionC}
          </button>
          <button onClick={() => setOptionChoosen('OptionD')} >
            {Questions[currQuestion].OptionD}
          </button>
        </div>
        {currQuestion == Questions.length - 1 ? (
          <button onClick={finishQuiz} >Finish Quiz</button>
        ) : (
          <button onClick={nextQuestion} >Next Question</button>
        )}
    </div>
  )
}

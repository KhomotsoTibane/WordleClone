import React, { useContext } from "react"
import {AppContext} from "../App"

function GameOver() {

const {gameOver, currentAttempt, correctWord}= useContext(AppContext)

const refreshPage = ()=>{
  window.location.reload();
}

return (
    <div className="gameOver">
    <h3>{gameOver.guessedWord ? "Well Done, you guessed the word" : "Uhh oh, you didnt get it this time, try again."}</h3>
    <h1>Word: {correctWord}</h1>
    {gameOver.guessedWord && (<h3>You guessed it in {currentAttempt.attempt} attempts</h3>)}
    <button className="restart-btn" onClick={refreshPage}>RESTART</button>
    </div>
  )
}
export default GameOver
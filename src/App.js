import './App.css';
import React, { useState, createContext, useEffect } from 'react'
import Board from './components/Board'; 
import Keyboard from './components/Keyboard';
import { boardDefault, generateWordSet } from "./components/Words"
import GameOver from './components/GameOver';
import Instructions from './components/Instructions';


export const AppContext = createContext();

function App() {

  const [board, setBoard]=useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({attempt:0, letterPos:0});
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver:false, guessedWord:false});
  const [correctWord, setCorrectWord]=useState("");

  useEffect(()=>{
    generateWordSet().then((words)=>{
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    })
  }
  ,[])

  const onSelectLetter =(keyVal)=>{
    if(currentAttempt.letterPos>4)return;

    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos]= keyVal;
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, letterPos:currentAttempt.letterPos + 1});
  };

  const onDeleteClick =()=>{
    if(currentAttempt.letterPos===0) return;

    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos-1]= "";
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, letterPos:currentAttempt.letterPos-1 })
  }

  const onEnterClick =()=>{
    if(currentAttempt.letterPos !== 5)return ;

    let currentWord = "";
    for(let i = 0; i< 5; i++){
      currentWord += board[currentAttempt.attempt][i];
    }

    if(wordSet.has(currentWord.toLowerCase() )){
      setCurrentAttempt({ attempt:currentAttempt.attempt + 1, letterPos:0});
    }else{
      alert("Invalid word");
    }    
    
    if(currentWord === correctWord){
      setGameOver({gameOver:true, guessedWord:true})
      return ;
    }

    if (currentAttempt.attempt === 4){
      setGameOver({gameOver:true, guessedWord:false})
    }
  };

  return (
    <div className="App">
      <nav>
        <h1>Word Guess</h1>
       <Instructions/>
      </nav>
      <AppContext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, 
      onDeleteClick, onEnterClick, correctWord, disabledLetters, setDisabledLetters, setGameOver,gameOver}}>
     <div className="game">
     <Board />
      {gameOver.gameOver ? <GameOver/> : <Keyboard/>}
     </div>

      </AppContext.Provider>
    </div>
  );
}

export default App;

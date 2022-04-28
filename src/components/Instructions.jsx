import React, {useState} from 'react'

function Instructions() {

    const [instructions, setInstructions] = useState(false);

    const toggleInstructions = ()=>{
        setInstructions(!instructions)
    }

    if(instructions){
        document.body.classList.add("active-instructions")
    }else{
        document.body.classList.remove("active-instructions")
    }

  return (
    <div>
    


    <button onClick={toggleInstructions}className="btn-instructions">
      Help
    </button>

    {instructions && (<div className="instructions">
        <div onClick={toggleInstructions} className="overlay"></div>
        <div className="instructions-content">
            <h3>How it works</h3>
            <ul>
                <li>You have to guess the Wordle in six goes or less.</li>
                <li>Every word you enter must be in the word list.<br/>The words are based on a dictionary.</li>
                <li>A correct letter turns green.</li>
                <li>A correct letter in the wrong place turns yellow.</li>
                <li>An incorrect letter turns gray.</li>
                <li>Letters can be used more than once.</li>
            </ul>
            <button onClick={toggleInstructions} className="close-instructions">Close</button>
        </div>
    </div>) 
    
    }
    </div>
  )
}

export default Instructions




import React, {useContext} from "react"
import { AppContext } from "../App"

function Key({keyVal, bigKey, disabled}) {

    const {onSelectLetter, onDeleteClick, onEnterClick} = useContext(AppContext);
    
    const selectLetter = ()=>{
        if(keyVal ==="ENTER"){
            onEnterClick();
        }
        else if(keyVal ==="DELETE"){
            onDeleteClick();
            }
        else{
            onSelectLetter(keyVal);
        }
    }
  return (
    <div className="key" id={bigKey ? "big" :disabled && "disabled"}  onClick={selectLetter} >
    {keyVal}
    </div>
  )
}

export default Key;
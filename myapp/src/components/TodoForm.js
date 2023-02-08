import React from 'react'
import { useState } from 'react';


function TodoForm({addTask}) {

    const[userInput, setUserInput] = useState("");
    const handleOnChange = (e) =>{
        setUserInput (e.currentTarget.value);
    }
    const handleSubmit = (e) => {
        if(userInput!== ""){
             e.preventDefault();
            addTask(userInput);
            setUserInput("")
        }

    }

  return (
    <div style= {{margin: 20}}>
        <form onSubmit = {handleSubmit}>
            <input type = "text" value = {userInput} onChange = {handleOnChange}/>
            <button>Add</button>
        </form>
    
    </div>
  )
}
export default TodoForm
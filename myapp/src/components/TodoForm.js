import React from 'react'
import { useState } from 'react';


function TodoForm({addTask}) {

    const[userInput, setUserInput] = useState("");


    const handleOnChange = (e) =>{
        setUserInput (e.currentTarget.value);
    }
    const handleSubmit = (e) => {
        if(userInput.length>0){
            e.preventDefault();
            addTask(userInput);
            setUserInput("") 
        }
        // e.target.setCustomValidity('Please tell us how we should address you.');
console.info(e.target)
    }

  return (
    <div style={{margin:"2vh"}}>
        <form onSubmit = {handleSubmit}>
            <input type = "text" value = {userInput} onChange = {handleOnChange} required/>
            <button style={{marginLeft:"0.5vh", cursor:"pointer", background:"rgb(217, 255, 156)"}}>Add</button>
        </form>
    </div>
  )
}
export default TodoForm
import React from 'react';
import {useState} from "react"


 function TodoItem({todo, onComplete, onDeleteItem, onRefreshTask, addTask}) {
  
  
  
  
  const [rewrite,setRewrite] = useState(false)




    
    function OnRewriteItem(){
      
        const [value,setValue] = useState(todo.task)  
        
        const handleOnChange = (e) =>{
          setValue (e.currentTarget.value);
      }

      const handleClick = (e) => {
        
            e.preventDefault();
            onRefreshTask(
            { id: todo.id,
              task: value,
              complete: false}
            );
            setRewrite(false)
            }

        return(
        <div className='onRewrite' style={getStyle()}>
            <input type="text" value={value} onChange={handleOnChange}/> 
            <div style={{display:"flex",alignItems: 'center',float:"right"}}>
              <button style={{backgroundColor:"rgb(160, 219, 255)",cursor:"pointer", borderStyle: "none"}} className='save' onClick={handleClick}>💾</button>
              <button className='delete-btn' onClick={()=>onDeleteItem(todo.id)}>×</button>
            </div>
        </div>
        );
    }




    function OffRewriteItem(){
      return(
        <>
        <div style = {getStyle()}>
        <input type='checkbox' checked = {todo.complete} onChange={()=>onComplete(todo.id)}/>
            
        {todo.task}
        
        <div style={{display:"flex",alignItems: 'center',float:"right"}}>
          
          <button className='rewrite-btn' onClick={()=>setRewrite(true)}>✎</button>
          <button className='delete-btn' onClick={()=>onDeleteItem(todo.id)}>×</button>
          
        </div>
    </div>
        </>)
    }


    const getStyle = () => {
        return {
            textDecoration: todo.complete ? 'line-through' : 'none',
            margin:"2vh",
            borderBottom:"solid",
            borderWidth: "1px",

                  
        }
    }




  return (
      <div className='containerTask' id={todo.id}>
        {rewrite ? <OnRewriteItem /> : <OffRewriteItem />
        }
      </div>
 
  )
}
 
export default TodoItem
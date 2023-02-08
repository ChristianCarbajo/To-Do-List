import React from 'react';
import {useState} from "react"


 function TodoItem({todo, onComplete, onDeleteItem, onRefreshTask}) {
  
  
  
  
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
      <>
          <input type="text" value={value} onChange={handleOnChange}/>
          {todo.task}
          <button className='save' onClick={handleClick}>Save</button>
          <button className='delete-btn' onClick={()=>onDeleteItem(todo.id)}>X</button>
      </>
      );
    }




    function OffRewriteItem(){
      return(
        <>
        <div style = {getStyle()}>
        <input type='checkbox' checked = {todo.complete} onChange={()=>onComplete(todo.id)}/>
            
        {todo.task}
        
        <div style={{display:"flex",alignItems: 'center',float:"right"}}>
          <button className='rewrite-btn' onClick={()=>setRewrite(true)}>R</button>
          <button className='delete-btn' onClick={()=>onDeleteItem(todo.id)}>X</button>
          
        </div>
    </div>
        </>)
    }


    const getStyle = () => {
        return {
            textDecoration: todo.complete ? 'line-through' : 'none',
            margin: "20px",
            border: "1px solid #ffffff",
            backgroundColor:"#CCF7E3",        
        }
    }




  return (
      <div className='containerTask' id={todo.id}>
        {rewrite ? <OnRewriteItem /> : <OffRewriteItem />
        }
      </div>
    // <div style = {getStyle()}>
    //     <input type='checkbox' checked = {todo.complete} onChange={()=>onComplete(todo.id)}/>
            
    //     {todo.task}
        
    //     <div style={{display:"flex",alignItems: 'center',float:"right"}}>
    //       <button className='rewrite-btn' onClick={()=>onRewriteItem(todo.id)}>R</button>
    //       <button className='delete-btn' onClick={()=>onDeleteItem(todo.id)}>X</button>
          
    //     </div>
    // </div>
  )
}
 
export default TodoItem
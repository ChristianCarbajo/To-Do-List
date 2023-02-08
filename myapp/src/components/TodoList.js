import React from 'react'
import TodoItem from "./TodoItem"

 function TodoList({todos, onComplete,onDeleteItem, onRefreshTask, addTask}) {
  return (
    <div>{
            todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} onComplete = {onComplete} onDeleteItem = {onDeleteItem} onRefreshTask = {onRefreshTask} addTask= {addTask}/>
            ))}
            </div>
  )
}
export default TodoList
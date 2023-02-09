import {useState} from 'react'
import './App.css';
import data from './data.json'
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {

  const[todos, setTodos] = useState(data);

const onComplete = (id) =>{
  console.info(id)
 setTodos( todos.map((todo)=>{
  return todo.id === Number(id) ? {...todo, complete: !todo.complete} :{...todo}; 
}))
}
const onDeleteItem =(id)=>{
 setTodos( [...todos].filter(todo=>todo.id !== id))
}
const addTask = (newTask) =>{
  let newItem = {id :todos.length, task: newTask, complete: false};
  setTodos([...todos, newItem]) 
}
const onRefreshTask = (editTask) =>{
  const {id, task} = editTask;
  const temp = [...todos]
  const element = temp.find(item=> item.id === id)
  element.task = task
  setTodos(temp)
}

console.info(todos)
  return (
    <div className="container">
      <Header />
      <TodoForm addTask= {addTask}/>
      <TodoList todos = {todos} onComplete = {onComplete} onDeleteItem = {onDeleteItem} onRefreshTask = {onRefreshTask} addTask={addTask}/>
      <Footer />
    </div>
  );
}

export default App;

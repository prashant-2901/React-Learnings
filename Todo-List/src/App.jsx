import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] =useState([])
  const [showAll, setShowAll] = useState(true)
  const [showCompleted, setShowCompleted] = useState(true)
  const [showActive, setShowActive] = useState(true)


  const handleChange = (e) =>{
    setTodo(e.target.value)
  }

  const handleEdit = (id) =>{
    let t = todos.filter(item =>item.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item =>{
      return item.id !== id
    })
    setTodos(newTodos)
  }
  
  const handleCheckbox = (e) =>{
    let id =e.target.name;
    let index = todos.findIndex(item =>{
      return item.id === id;
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted=!newTodos[index].isCompleted
    setTodos(newTodos) 
  }

  const handleDelete = (id) =>{
    let newTodos = todos.filter(item =>{
      return item.id !== id
    })
    setTodos(newTodos) 
  }

  const handleAdd = () =>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
  }

  const toggleAll = () => { 
    setShowAll(!showAll)
   }
  const toggleActive = () => { 
    setShowActive(!showActive)
   }
  const toggleCompleted = () => { 
    setShowCompleted(!showCompleted)
    console.log("todos", todos);
   }

  return (
    <div className='container bg-slate-300 '>
      <div className="addTodo py-5">
        <h2>Add a todo</h2>
        <input onChange={handleChange} type="text" className='w-1/3' value={todo}/>
        <button onClick={handleAdd}  disabled={todo.length <=3 } className='bg-violet-500 hover:bg-violet-700 p-2 ml-2 text-white py-1 rounded-md font-bold text-sm disabled:bg-gray-500'>Add</button>
      </div>
        <input type="checkbox" name="" checked={showAll} onChange={toggleAll} id="" /> Show All
        <input type="checkbox" name="" checked={showActive} onChange={toggleActive} id="" /> Show Active
        <input type="checkbox" name="" checked={showCompleted} onChange={toggleCompleted} id="" /> Show Completed
    <h1 className="">Your Todos</h1>
    <div className="todos">
      {todos.length ===0 && <div>No todos to display</div>}
      {todos.map(item =>{

      
      return ((showAll) || (showActive &&!item.isCompleted) || (showCompleted && item.isCompleted)) &&
      <div className="todo flex" key={item.id}>
    {console.log("completed", showCompleted + item.isCompleted)}
    {console.log("All", showAll + !item.isCompleted)}
    {console.log("Active", showActive + !item.isCompleted)}
        <input type="checkbox" onChange={handleCheckbox} name={item.id} checked={item.isCompleted} id="" />
        <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
        <div className="buttons">
          <button onClick={()=> handleEdit(item.id)} className='bg-violet-500 hover:bg-violet-700 p-2 ml-2 text-white py-1 rounded-md font-bold text-sm'>Edit</button>
          <button onClick={()=>{handleDelete(item.id)}} className='bg-violet-500 hover:bg-violet-700 p-2 ml-2 text-white py-1 rounded-md font-bold text-sm'>Delete</button>
        </div>
      </div>
      
      })}
    </div>
    </div>
  )
}

export default App

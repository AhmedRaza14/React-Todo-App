import { useState } from 'react'

import './App.css'

function App() {
  const [task, setTask] = useState([])
  const [input, setInput] = useState("")
  const [history, setHistory] = useState(false)

  const addingTask = () => {
    if (input === ""){
      alert("Please enter a task")
      return
    }
    else{

      setTask([...task, input])
      setInput("")
      setHistory(true)
    }
  }
  const editTask = (index) => {
    const newTask = prompt("Edit your task")
    if (newTask === ""){
      alert("Please enter a task")
      return
    }
    else{
      setTask(task.map((item, i) =>
        i === index ? newTask : item
      ))
    }
  }
  const deleteTask = (index) => {
  setTask(task.filter((_, i) => i !== index))
}
  const doneTask = (index) => {
    setTask(task.map((item, i) =>
      i === index ? <s>{item}</s> : item
    ))
  }
  return (
    <>
    <h1
    style={{
      fontSize: '50px',
      color: 'black',
      marginTop: '-60px'
    }}
    >Todo-App React</h1>
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '50px',
    }}>

      <input type="text"
      style={{
        backgroundColor: '#dddddd',
        width: '230px',
        height: '20px',
        borderRadius: '7px',
        padding: '5px',
        marginRight: '30px',
      }}
      value={input}
      onChange={(e) => setInput(e.target.value)}      />
      <button
      style={{
        backgroundColor: 'green',
        color: 'white',        border: 'none',
        borderRadius: '7px',
        padding: '5px 10px',
        width: '70px',
        height: '40px',
      }}
      onClick={addingTask}>Add</button>
        </div>
        {task.length > 0 && (
      <ul
      style={{
        listStyleType: 'none',
        padding: '0',
        marginTop: '20px',
        marginLeft: '15px',
        color: 'black',
        width: '400px',
        borderRadius: '7px',
        backgroundColor: '#dddddd',
        paddingTop: '20px',
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        fontSize: '17px',
      }}
      >
        {task.map((item, index) => (
  <li
    key={index}
    style={{
      display: 'flex',
      alignItems: 'center',      
      justifyContent: 'space-between', 
      padding: '10px 20px',      
    }}
  >
    <span style={{ flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis' }}>
      {item}
    </span>

    <div style={{ display: 'flex', gap: '10px', marginLeft: '20px' }}>
      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '7px',
          padding: '5px 10px',
        }}
        onClick={() => deleteTask(index)}
      >
        Delete
      </button>
      
      <button
        style={{
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '7px',
          padding: '5px 10px',
        }}
        onClick={() => editTask(index)}
      >
        Edit
      </button>

      <button
        style={{
          backgroundColor: 'goldenrod',
          color: 'white',
          border: 'none',
          borderRadius: '7px',
          padding: '5px 10px',
        }}
        onClick={() => doneTask(index)}
      >
        Mark Done
      </button>
    </div>
  </li>
))}
      </ul>
        )}
    </>
  )
}

export default App

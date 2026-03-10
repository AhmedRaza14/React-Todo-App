import { useState } from 'react'

import './App.css'

function App() {
  const [task, setTask] = useState([])
  const [input, setInput] = useState("")

  const addingTask = () => {
    if (input === ""){
      alert("Please enter a task")
      return
    }
    else{

      setTask([...task, input])
      setInput("")
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
      <ul
      style={{
        listStyleType: 'none',
        padding: '0',
        marginTop: '20px',
        marginLeft: '35px',
        color: 'black',
        backgroundColor: '#dddddd',
        width: '300px',
        borderRadius: '7px',
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
          <li key={index}>{item}
          <button
           style={{
             backgroundColor: 'red',
             border: 'none',
             borderRadius: '7px',
             padding: '5px 10px',
             marginLeft: '40px',
            }}
            onClick={() => deleteTask(index)}>
            Delete
            </button>
            <button
            style={{
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '7px',
              padding: '5px 10px',
              marginLeft: '10px',
            }}
            onClick={() => editTask(index)}
            >Edit</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

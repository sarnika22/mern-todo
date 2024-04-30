/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Create from './Create'

function Home() {
    const [todos, setTodos] = useState([]) //empty array to store the todo list
  return (
    <div>
        <h2>Todo List</h2>
        <Create />
         {
          todos.length === 0 
          ? //if todo is empty
          <div>
            <h2>No Record</h2>
          </div>
          : //else display todo record
          todos.map(todo => (
            <div>
              {todo}
            </div>

          ) )
         }
    </div>
  ) 
}

export default Home
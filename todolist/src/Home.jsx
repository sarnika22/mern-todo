/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {
  BsCircleFill,
  BsFillTrashFill,
  BsCheckCircleFill,
} from "react-icons/bs";

function Home() {
  const [todos, setTodos] = useState([]); //empty array to store the todo list
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        //if todo is empty
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        //else display todo record
        todos.map((todo) => (
          <div className="task">
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <BsCheckCircleFill className="icon" />
              ) : (
                <BsCircleFill className="icon" />
              )}

              <p>{todo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill className="icon" />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;

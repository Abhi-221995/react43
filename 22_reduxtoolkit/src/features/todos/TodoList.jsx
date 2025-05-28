import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./todoSlice";

const TodoList = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      //   Task: make the input field empty upon clicking
    }
  };

  return (
    <>
      <h2>Todo List</h2>
      <input type={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              Toggle
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

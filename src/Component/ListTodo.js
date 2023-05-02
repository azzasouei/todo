import React from "react";
import Todo from "./Todo";

function ListTodo({ todos, deleteTodo, doneTodo, editTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          deleteTodo={deleteTodo}
          doneTodo={doneTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default ListTodo;

import React from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import Edit from "./Edit";

function Todo({ todo, deleteTodo, doneTodo, editTodo }) {
  return (
    <div>
      {
        <div className="listTodo">
          <p style={{ color: todo.done ? "red" : null }}>{todo.text}</p>
          <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
            Delete
          </Button>
          <Button variant="success" onClick={() => doneTodo(todo.id)}>
            Done
          </Button>
          <Edit todo={todo} editTodo={editTodo} />
        </div>
      }
    </div>
  );
}

export default Todo;

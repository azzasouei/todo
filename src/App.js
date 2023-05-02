import "./App.css";
import AddTodo from "./Component/AddTodo";
import ListTodo from "./Component/ListTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { text: "learn React", id: 1, done: false },
    { text: "learn Node", id: 2, done: false },
  ]);

  // Add Todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  //delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //done Todo
  const doneTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Edit Todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };
  return (
    <div className="App">
      <h1>Workshop Hooks</h1>
      <AddTodo addTodo={addTodo} />
      <ListTodo
        todos={todos}
        deleteTodo={deleteTodo}
        doneTodo={doneTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;

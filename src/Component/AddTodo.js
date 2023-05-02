import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "../App.css";

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  //Handle Add
  const handleAdd = (e) => {
    e.preventDefault();
    if (text) {
      addTodo({ id: Math.random(), done: false, text: text });
      setText("");
    }
  };
  return (
    <div>
      <Form className="formTodo" onSubmit={handleAdd}>
        <FormControl
          type="text"
          value={text}
          placeholder="Add task"
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddTodo;

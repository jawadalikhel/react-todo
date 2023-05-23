import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./inputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function editTodo(todoId){
    console.log(todoId, "<---- todoId to edit")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              deleteTodo={deleteItem}
              editTodo={editTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

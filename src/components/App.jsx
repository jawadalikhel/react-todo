import React, {useState} from "react";

export default function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);


    function handleChange(event){
        // console.log(event.target.value, '<---- ')
        const newTodo = event.target.value;
        
        setInputText(newTodo);
    }

    function addTodo(event){
        console.log("submit clicked")
        // event.preventDefault();
        setTodos((prevState)=>{
            return [...prevState, inputText]
        })

        setInputText("");
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
            type="text" 
            name="todo"
            value={inputText} 
            onChange={handleChange} 
        />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            {
                todos.map((todo)=>{
                    return(
                    <li>{todo}</li>
                    )
                })
            }
          
        </ul>
      </div>
    </div>
  );
}
import React, {useState} from "react";

export default function ToDoItem(props){
    // console.log(props, '<---- props')
    return(
        <div>
            <li>{props.text}</li>
        <button  onClick={()=>{
            props.deleteTodo(props.id);
        }}><span>Delete</span>
        </button>

        <button onClick={()=>{
            props.editTodo(props.id)
        }}>
            <span>Edit</span>
        </button>
        </div>
    )
}
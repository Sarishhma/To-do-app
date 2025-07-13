import React from 'react'
// import TodoItem from "./TodoItem";


export default function Todo({todo,onDelete}) {
  return (
    <div className='todo-list'>
    
    {/* <TodoItem todo={todo[0]}/> */}
      <h1 className="heading" text-align='center'>My Todos</h1>
      {/* Map through all todos and render a TodoItem for each */}
      {/* This takes the todo array (passed as a prop) and maps over each item.

For each item in the array, it creates a TodoItem component. */}
      {todo.map((todo) => (
        <div key={todo.sno}className='todo-item' >
          <p>{todo.sno}</p>
          <p>{todo.work}</p>
          <p>{todo.desc}</p>  
         
        <button className="btn" onClick={()=>onDelete(todo.sno)}>Delete</button>
        </div>
            // Required: Unique key for each item
            // Pass the entire todo object
        
      ))}
    </div>
  );
}

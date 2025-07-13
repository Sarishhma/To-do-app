// import logo from "./logo.svg";
import "./App.css";

import Todo from "./MyComponent/Todo";
import { useState } from "react";


function App() {
  let [todo,setTodo] = useState( [
    {
      sno: 1,
      work: "cook",
      desc: "I have to cook dinner for my parents ",
    },

    {
      sno: 2,
      work: "read a book",
      desc: "i need to read a book ",
    },
    {
      sno: 3,
      title: "brush ",
      desc: "i need to brush my teeth",
    },
  ]);

const onDelete=(sdelete)=>{
  setTodo(todo.filter((todo)=>todo.sno !== sdelete))
}
  return (
    <>
     
      <Todo todo={todo} onDelete={onDelete} />{/* Pass the entire array to Todo */}
    
      
    </> 
  );
}

export default App;

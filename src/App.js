
import './App.css';
import Todo from './Todo';
import React, {useState} from "react";
import {List, Paper} from "@mui/material"

function App() {
  const [items,setItem] = useState([
    {
    id:"0",
    title:"Hello World 1",
    done : true
  },{
    id :"1",
    title : "Hello World2",
    done : false
  },
]);
  
  //<Todo items = {items}/> 처음에  return에 있던 구문
  /*{items.map(item=>(
    <Todo key = {item.id} item={item}/>
    ))} chatGPT가 알려준 구문
    */
    let todoItems = items.length >0 && 
    <Paper style = {{margin:16}}>
      <List>
        {items.map((item)=> (<Todo item = {item} key={item.id}/>))}   
      </List>
      </Paper>

  return (
    <div className="App">
      {todoItems}
      
    </div>
  );
}



export default App;


import './App.css';
import Todo from './Todo';
import React, {useState} from "react";
import {Container,List, Paper} from "@mui/material"
import AddTodo from './AddTodo';

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
  
const addItem = (item) => {
  item.id = "ID-" + items.length; //key를 위한 id
  item.done =false; //done
  //업데이트는 반드시 setItems로 하고 새 배열을 만들어야 한다,
  setItem([...items,item]);
  console.log("items : " ,items);


}

  //<Todo items = {items}/> 처음에  return에 있던 구문
  /*{items.map(item=>(
    <Todo key = {item.id} item={item}/>
    ))} chatGPT가 알려준 구문
    */
    let todoItems = items.length >0 && (
    <Paper style = {{margin:16}}>
      <List>
        {items.map((item)=> (<Todo item = {item} key={item.id}/>))}   
      </List>
      </Paper>
  );
  return (<div className="App">
    <Container maxWidth="md">
      <AddTodo addItem={addItem}/>
      <div className="TodoList">{todoItems}</div>
    </Container>
     {todoItems}</div>);

}



export default App;

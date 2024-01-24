
import './App.css';
import Todo from './Todo';
import React, {useState} from "react";
import {Container,List, Paper} from "@mui/material"
import AddTodo from './AddTodo';

function App() {
  const [items,setItem] = useState([]);
  
const addItem = (item) => {
  item.id = "ID-" + items.length; //key를 위한 id
  item.done =false; //done
  //업데이트는 반드시 setItems로 하고 새 배열을 만들어야 한다,
  setItem([...items,item]);
  console.log("items : " ,items);
}

const deleteItem = (item) => {
  // 삭제할 아이템을 찾는다
  const newItems = items.filter(e=>e.id !== item.id);
  // 삭제할 아이템을 제외한 아이템을 다시 배열에 저장함.
  setItem([...newItems]);
}

const editItem = () => {
  setItem([...items]);
}

  //<Todo items = {items}/> 처음에  return에 있던 구문
  /*{items.map(item=>(
    <Todo key = {item.id} item={item}/>
    ))} chatGPT가 알려준 구문
    */
    let todoItems = items.length >0 && (
    <Paper style = {{margin:16}}>
      <List>
        {items.map((item)=> 
        (<Todo 
        item = {item} 
        key={item.id}
        editItem={editItem}
        deleteItem={deleteItem}/>))}   
      </List>
      </Paper>
  );
  return (<div className="App">
    <Container maxWidth="md">
      <AddTodo addItem={addItem}/>
      <div className="TodoList">{todoItems}</div>
    </Container>
     {todoItems}
     </div>);

}



export default App;

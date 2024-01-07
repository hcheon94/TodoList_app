import React, {useState} from "react"
import {ListItem, ListItemTextm, InputBase, Checkbox, ListItemText} from "@mui/material";
const Todo = (props) =>{
    const [item,setItem] = useState(props.item);

    return (
        <ListItem>
            <Checkbox Checked={item.done}/>
            <ListItemText>
                <InputBase
                inputProps={{"aria-label" : "naked"}}
                type="text"
                id={item.id}
                name = {item.id}
                value = {item.title}
                multiline={true}
                fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    );
};

export default Todo;

/*
    <div className="Todo">
            <input 
            type="checkbox" 
            id={item.id} 
            name={item.id} 
            checked={item.done}
            />
            <label id={item.id}>{item.title}</label> 
        </div>
    */
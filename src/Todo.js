import React, {useState} from "react"
import {ListItem, 
    ListItemText, 
    InputBase, 
    Checkbox,
    ListItemSecondaryAction, // 얘는 ListItem내에서 부가적인 동작이나 정보를 표시하기 위해 사용되는 아이 ListItemText와 같이 사용되며 오른쪽끝에 위치
    IconButton,} from "@mui/material";
import  {  DeleteOutlined }  from "@mui/icons-material";


const Todo = (props) =>{
    const [item,setItem] = useState(props.item);
    const [readOnly,setReadOnly] = useState(true);
    const deleteItem = props.deleteItem;
    const editItem = props.editItem;
    //deleteEventHandler 작성
    const deleteEventHandler = () => {
        deleteItem(item);
    }

    const editEventHandler = (e) => {
        setItem({...item,title:e.target.value});
        /*
        item.title = e.target.value;
        editItem();
        */
    }
    const checkboxEventHandler = (e) =>{
        item.done = e.target.checked;
        editItem(item);
    }

    const turnOffReadOnly = () =>{
        setReadOnly(false);
    }

    const turnOnReadOnly = (e) =>{
        if(e.key === "Enter" && readOnly ==false){
            setReadOnly(true);
            editItem(item);
        }
    }


    return (
        <ListItem>
            <Checkbox Checked={item.done} onChange={checkboxEventHandler}/>
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label" : "naked",
                        readOnly : readOnly }}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
                type="text"
                id={item.id}
                name = {item.id}
                value = {item.title}
                multiline={true}
                fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo"
                    onClick={deleteEventHandler}>
                        <DeleteOutlined/>
                </IconButton>
            </ListItemSecondaryAction>
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
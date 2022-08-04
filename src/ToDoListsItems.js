import React from "react";
import './index.css';

function ToDoLiatsItems(props) {
    return (
        <>
            <div className="todo_style">
                <i title="delete item" onClick={() => {
                    props.onselect(props.id)
                }} className="fa fa-times" area-hidden = "true"></i>
                <i title="edit item" onClick={() => {
                    props.onselect(props.id)
                }} className="fa fa-edit" area-hidden = "true"></i>
                <li>{props.text}</li>
            </div>
        </>
    );
};

export default ToDoLiatsItems
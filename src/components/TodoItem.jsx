import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ id, text, completed }) => {
    const dispatch = useDispatch();

    return (
        <li>
            <span
                onClick={() => dispatch(toggleTodo(id))}
                style={{ textDecoration: completed ? "line-through" : "none", cursor: "pointer" }}
            >
                {text}
            </span>
            <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
        </li>
    );
};

export default TodoItem;

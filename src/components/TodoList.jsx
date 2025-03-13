import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todos, filter } = useSelector((state) => state.todo);

    const filteredTodos = todos.filter(todo => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending") return !todo.completed;
        return true;
    });

    return (
        <ul>
            {filteredTodos.length > 0 ? (
                filteredTodos.map(todo => (
                    <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
                ))
            ) : (
                <p>No todos found</p>
            )}
        </ul>
    );
};

export default TodoList;

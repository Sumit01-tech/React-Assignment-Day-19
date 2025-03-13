import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/todoSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.todo.filter);

    return (
        <div>
            <button onClick={() => dispatch(setFilter("all"))} disabled={filter === "all"}>
                All
            </button>
            <button onClick={() => dispatch(setFilter("completed"))} disabled={filter === "completed"}>
                Completed
            </button>
            <button onClick={() => dispatch(setFilter("pending"))} disabled={filter === "pending"}>
                Pending
            </button>
        </div>
    );
};

export default Filter;

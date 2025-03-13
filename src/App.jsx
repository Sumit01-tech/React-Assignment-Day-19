import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App with Redux</h1>
        <AddTodo />
        <Filter />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;

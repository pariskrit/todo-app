import { useState } from "react";

const useHandleTodoState = () => {
  const [todolist, setTodolist] = useState([]);

  const setTodoState = (action, data, editDescription) => {
    switch (action) {
      case "add":
        setTodolist([...todolist, data]);
        break;
      case "delete":
        console.log(data);
        const oldList = [...todolist];
        const newList = oldList.filter((todo) => todo.id !== data.id);
        setTodolist(newList);
        break;

      case "edit":
        const allTodos = [...todolist];
        const updateTodoId = allTodos.findIndex((todo) => todo.id === data.id);
        const newTodo = { ...allTodos[updateTodoId] };
        newTodo.task = editDescription;
        allTodos[updateTodoId] = newTodo;
        setTodolist(allTodos);
        break;
      default:
        console.log("nothin");
    }
  };

  return [todolist, setTodoState, setTodolist];
};

export default useHandleTodoState;

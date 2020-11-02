import React, { useState, useEffect } from "react";
import "./todolist.css";
import Modal from "../../UI/Modal/Modals";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import useHandleTodoState from "../../customhooks/useHandleTodoState/useHandleTodoState";
import useDate from "../../customhooks/useDate/useDate";
import Today from "./Today";

function Todolists(props) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [oldTodo, setOldTodo] = useState({});
  const [addDescription, setAddDescription] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [todolist, setTodoState, setTodolist] = useHandleTodoState();
  const [reqDate, setDate] = useDate();

  useEffect(() => {
    setDate(new Date(), props.title === "Tomorrow" ? "tomorrow" : null);
    console.log(props.user);
    if (props.title === "Today") {
      props.getTodos(props.user);
    }
    if (props.title === "Tomorrow") {
      props.getTomTodo(props.user);
    }
    return () => {
      console.log("unmount");
    };
  }, [props.title]);

  useEffect(() => {
    const todos =
      props.title === "Tomorrow" ? [...props.tomTodos] : [...props.todos];
    console.log(todos);
    setTodolist([...todos]);
  }, [props.todos, props.tomTodos]);

  const addTodo = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const newTask = { id: id, task: addDescription };

    setTodoState("add", newTask);
    setShowAddModal(false);
    setAddDescription("");
  };

  const handleEditModal = (todo) => {
    setEditDescription(todo.task);
    setOldTodo(todo);
    setShowEditModal(true);
  };

  const editTodo = () => {
    setTodoState("edit", oldTodo, editDescription);
    setShowEditModal(false);
  };

  return (
    <div className="todolist">
      <Today
        reqDate={reqDate}
        title={props.title}
        todolist={todolist}
        setTodoState={setTodoState}
        handleEditModal={handleEditModal}
        setShowAddModal={setShowAddModal}
      />

      <Modal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        addDescription={addDescription}
        changeAddDescription={(e) => setAddDescription(e.target.value)}
        addTodo={addTodo}
        showAddModal={showAddModal}
      />
      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        showAddModal={showAddModal}
        editDescription={editDescription}
        changeEditDescription={(e) => setEditDescription(e.target.value)}
        editTodo={editTodo}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todayTodos,
    tomTodos: state.todos.tomorrowTodos,
    user: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: (user) => dispatch(actionCreators.getTodoAsync(user)),

    getTomTodo: (user) => dispatch(actionCreators.getTomTodoAsync(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todolists);

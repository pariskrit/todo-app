import React, { useState, useEffect } from "react";
import "./todolist.css";

import Button from "react-bootstrap/Button";
import Modal from "../../UI/Modal/Modals";
import Todo from "./Todo/Todo";
import FlipMove from "react-flip-move";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import useHandleTodoState from "../../customhooks/useHandleTodoState/useHandleTodoState";
import Spinner from "react-bootstrap/Spinner";
import useDate from "../../customhooks/useDate/useDate";
import Sucess from "../../UI/Alert/sucess";

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
      <div className="todolist__header">
        <h3>{props.title}</h3>
        <p>
          {reqDate.day} {reqDate.date} {reqDate.month}
        </p>
      </div>
      {props.isLoading ? (
        <Spinner animation="border" />
      ) : todolist.length !== 0 ? (
        <FlipMove>
          {todolist.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={() => setTodoState("delete", todo)}
              showEditModal={() => handleEditModal(todo)}
            />
          ))}
        </FlipMove>
      ) : (
        <div>
          <h4 style={{ color: "#615254" }}>No tasks to do {props.title}</h4>
        </div>
      )}

      <Sucess show={props.sucess} close={props.isSucess} />

      <div className="todolist__addtodo">
        <Button variant="dark" onClick={() => setShowAddModal(true)}>
          Add task
        </Button>

        <Button
          variant="primary"
          onClick={() =>
            props.title === "Tomorrow"
              ? props.saveTomTodo([...todolist], props.user)
              : props.saveTodos([...todolist], props.user)
          }
        >
          Save
        </Button>
      </div>

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
    isLoading: state.todos.isLoading,
    sucess: state.todos.sucess,
    user: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveTodos: (data, user) =>
      dispatch(actionCreators.saveTodoAsync(data, user)),
    getTodos: (user) => dispatch(actionCreators.getTodoAsync(user)),
    saveTomTodo: (data, user) =>
      dispatch(actionCreators.saveTomTodoAsync(data, user)),
    getTomTodo: (user) => dispatch(actionCreators.getTomTodoAsync(user)),
    isSucess: () => dispatch(actionCreators.isSuccess(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todolists);

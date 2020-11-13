import React, { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Todo from "./Todo/Todo";
import FlipMove from "react-flip-move";
import Button from "react-bootstrap/Button";
import Sucess from "../../UI/Alert/sucess";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { useParams, useLocation } from "react-router-dom";

function Today(props) {
  const { id } = useParams();
  let location = useLocation();
  useEffect(() => {
    console.log("today rendered " + id + " in " + location.pathname);
  });
  return (
    <>
      <div className="todolist__header">
        <h3>{props.title}</h3>
        <p>
          {props.reqDate.day} {props.reqDate.date} {props.reqDate.month}
        </p>
      </div>
      {props.isLoading ? (
        <Spinner animation="border" />
      ) : props.todolist.length !== 0 ? (
        <FlipMove>
          {props.todolist.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={() => props.setTodoState("delete", todo)}
              showEditModal={() => props.handleEditModal(todo)}
            />
          ))}
        </FlipMove>
      ) : (
        <div className="todolist__display">
          <h4 style={{ color: "#615254" }}>
            Welcome {props.user}, What Is Your Plan For {props.title}!
          </h4>
        </div>
      )}

      <Sucess show={props.sucess} close={props.isSucess} />

      <div className="todolist__addtodo">
        <Button variant="dark" onClick={() => props.setShowAddModal(true)}>
          Add task
        </Button>

        <Button
          variant="primary"
          onClick={() =>
            props.title === "Tomorrow"
              ? props.saveTomTodo([...props.todolist], props.user)
              : props.saveTodos([...props.todolist], props.user)
          }
        >
          Save
        </Button>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    sucess: state.todos.sucess,
    isLoading: state.todos.isLoading,
    user: state.users.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveTodos: (data, user) =>
      dispatch(actionCreators.saveTodoAsync(data, user)),
    isSucess: () => dispatch(actionCreators.isSuccess(false)),
    saveTomTodo: (data, user) =>
      dispatch(actionCreators.saveTomTodoAsync(data, user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Today);

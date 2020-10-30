import React, { forwardRef } from "react";
import "./todo.css";
import Button from "react-bootstrap/Button";
import EditIcon from "@material-ui/icons/Edit";

const Todo = forwardRef((props, ref) => {
  const { todo, deleteTodo, showEditModal, hello } = props;
  return (
    <div className="todo" ref={ref}>
      <li>{todo.task}</li>

      <div className="todo__buttons">
        <Button variant="primary" type="button" onClick={showEditModal}>
          <EditIcon />
        </Button>

        <Button variant="danger" type="button" onClick={deleteTodo}>
          Done
        </Button>
      </div>
    </div>
  );
});

export default Todo;

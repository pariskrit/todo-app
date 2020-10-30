import React from "react";
import TodoList from "./components/TodoLists/Todolists";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebars from "./components/SideBars/Sidebars";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./components/Form/Form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="app">
        <h1>Todo App</h1>
        <div className="app__child">
          <Switch>
            <Route exact path="/">
              <Form />
            </Route>
            <Route path="/today">
              {props.user ? (
                <>
                  <Sidebars />
                  <TodoList title="Today" />
                </>
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/tomorrow">
              {props.user ? (
                <>
                  <Sidebars />
                  <TodoList title="Tomorrow" />
                </>
              ) : (
                <Redirect to="/" />
              )}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  };
};

export default connect(mapStateToProps)(App);

import React from "react";
import TodoList from "./components/TodoLists/Todolists";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebars from "./components/SideBars/Sidebars";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterForm from "./components/Form/RegisterForm/RegisterForm";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Todo App</h1>
        <div className="app__child">
          {/* <Sidebars /> */}
          <Switch>
            <Route exact path="/">
              {/* <TodoList title="Today" /> */}
              <RegisterForm />
            </Route>
            <Route path="/tomorrow">
              <TodoList title="Tomorrow" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

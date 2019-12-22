import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import InstaMainTable from "./components/instagram/MainTable/InstaMainTable";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import RegisterForm from "./components/Register/RegisterForm";

class App extends React.Component {
  state = {
    isLogin: true
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid main-container">
          <Switch>
            <Route path="/login" render={props => <Login {...props} />} />
            <Route
              path="/register"
              render={props => <RegisterForm {...props} />}
            />
            <Route
              path="/insgiht"
              render={props => <InstaMainTable {...props} />}
            />
            <Redirect exact from="/" to="/login" />
            <Route path="/notFound" component={NotFound} />
            <Redirect to="notFound" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

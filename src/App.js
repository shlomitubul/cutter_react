import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import InstaMainTable from "./components/instagram/MainTable/InstaMainTable";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import RegisterForm from "./components/Register/RegisterForm";
import Logout from "./components/Logout/Logout";
import auth from "../src/services/authService";
import InstagramLogin from "./components/instagram/InstagramLogin";
import "./App.css";

class App extends React.Component {
  state = {
    isLogin: true,
    user: null
  };

  componentDidMount() {
    const user = auth.getCurrerntUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <div className="container-fluid main-container">
          <Switch>
            <Route
              path="/login"
              render={props => {
                if (!user) return <Login {...props} />;
                return <InstaMainTable />;
              }}
            />
            <Route
              path="/InstagramLogin"
              render={props => {
                if (!user) return <Login {...props} />;
                return <InstagramLogin />;
              }}
            />

            <Route path="/logout" component={Logout} />
            <Route
              path="/register"
              render={props => <RegisterForm {...props} />}
            />
            <Route
              path="/insight"
              render={props => {
                if (!user) return <Login />;
                return <InstaMainTable {...props} />;
              }}
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

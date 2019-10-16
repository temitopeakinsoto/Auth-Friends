import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import '../App.css';
import Friends from "./friends";
import Login from "./login";
import NewFriend from "./addfriend";

function Container(props) {
  const handleLogout = () => {
    localStorage.clear();
    props.history.replace("/");
  };

  return (
    <div className="container">
      <nav className="App-header">
        <span className="nav-links">
          <NavLink exact to="/" className="link">
            Login
          </NavLink>
          <NavLink to="/friends" className="link">Friends</NavLink>
          <NavLink to="/addfriend" className="link">Add Friend</NavLink>
        </span>

        <button onClick={handleLogout}>Logout</button>
      </nav>

      <main className="main">
        <Route exact path="/" component={Login} />
        <Route exact path="/friends" render={props => withAuthed(Friends, props)} />
        <Route
          exact
          path="/addfriend"
          render={props => withAuthed(NewFriend, props)}
        />
      </main>
    </div>
  );
}

function withAuthed(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  }
  return <Redirect to="/" />;
}

export default Container;

import React, { useRef } from "react";
import axios from "axios";
import '../App.css'

export default function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submit = () => {
    axios
      .post("http://localhost:5000/api/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="login">
      <h3>Login</h3>
      <div>
        <span>Username:</span>
        <input ref={usernameRef} type="text" />
      </div>
      <div>
        <span>Password:</span>
        <input ref={passwordRef} type="text" />
      </div>
      <button onClick={submit} type="submit">
        Submit
      </button>
    </div>
  );
}

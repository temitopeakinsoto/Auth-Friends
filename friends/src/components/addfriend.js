import React, { useRef } from "react";
import withAuth from "../axios";

const friendsApiUrl = "http://localhost:5000/api/friends";

export default function NewFriend(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  const submit = () => {
    withAuth()
      .post(friendsApiUrl, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        age: ageRef.current.value
      })
      .then(res => {
        props.history.push("/friends");
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  return (
    <div>
      <div>
        <h1>Add A New Friend</h1>
        <span>Name:</span>
        <input ref={nameRef} type="text" />
      </div>
      <div>
        <span>Age:</span>
        <input ref={ageRef} type="text" />
      </div>
      <div>
        <span>Email:</span>
        <input ref={emailRef} type="text" />
      </div>
      <button onClick={submit} type="submit">
        Submit
      </button>
    </div>
  );
}

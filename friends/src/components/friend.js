import React from "react";
import { withRouter } from "react-router-dom";

function NewFriend(props) {
  const { id, name, age, email, setFriends } = props;
  function handleDelete() {
    setFriends((prev) => prev.filter((friend) => friend.id !== id));
  }

  const handleEdit = () => {
    props.history.push("/editFriend");
  };

  return (
    <div key={id} className="friend">
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
export default withRouter(NewFriend);

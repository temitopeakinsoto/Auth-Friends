import React, { useState, useEffect } from "react";
import withAuth from "../axios";

const friendsApiUrl = "http://localhost:5000/api/friends";

export default function Friend() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    withAuth()
      .get(friendsApiUrl)
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => {
        alert(error.response.data.error);
      });
  }, []);
  return (
    <div>
      {friends.map(friend => (
        <div key={friend.id} className="friend">
          <p>{friend.name}</p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      ))}
    </div>
  );
}

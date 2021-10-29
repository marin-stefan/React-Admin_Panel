import React from "react";
import "./UserList.css";
import UserItem from "./UserItem";

function UserList(props) {
  const { users, deleteUser } = props;

  return (
    <div className="user-list">
      <h2>Lista utilizatorilor:</h2>
      {users.map((user, index) => {
        return (
          <UserItem
            deleteUserItem={(id) => deleteUser(id)}
            id={user.id}
            name={user.name}
            email={user.email}
            isGoldClient={user.isGoldClient}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default UserList;

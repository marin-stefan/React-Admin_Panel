import React from "react";
import UserItem from "./UserItem";

function UserList(props) {
  const { users, deleteUser } = props;

  return (
    <div className="">
      <h2 className="px-3 py-3">User's list :</h2>
      <div className="d-flex container flex-row flex-wrap">
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
    </div>
  );
}

export default UserList;

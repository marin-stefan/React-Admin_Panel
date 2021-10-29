import React from "react";
import "./UserItem.css";

function UserItem(props) {
  const { id, name, email, isGoldClient, deleteUserItem } = props;
  return (
    <div className="user-item">
      <div id="user-item-description">
        <h3>{name}</h3>
        <p>{email}</p>
        {isGoldClient ? <h3>Client GOLD</h3> : null}
        <p>Salariu : 4990</p>
        <button onClick={() => deleteUserItem(id)}>Delete User</button>
      </div>
      <div id="user-item-picture">
        <img
          src="http://chadhowsefitness.com/wp-content/uploads/2010/12/einstein.jpg"
          alt="Enstein"
        />
      </div>
    </div>
  );
}

export default UserItem;

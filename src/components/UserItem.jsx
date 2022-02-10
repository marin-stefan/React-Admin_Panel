import React from "react";
import "./BtnShadow.css";
import "./UserItem.css";

function UserItem(props) {
  const { id, name, email, isGoldClient, deleteUserItem } = props;
  return (
    <div className="bg-warning rounded-3 border border-warning card user-item mx-1 my-2">
      <img
        className="card-img-top border border-light"
        src="https://i.ibb.co/dL4M53M/ugly.jpg"
        alt="funny ugly animal in a space suit"
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <h6 className="card-text">{email}</h6>
        <h6 className="card-text">Salary : 4990</h6>
        {isGoldClient ? <h5 className="crad-text">Client GOLD</h5> : null}
        <button
          className="rounded-3 btn btn-primary btn-sm btn-shadow border-light"
          onClick={() => deleteUserItem(id)}
        >
          Delete User
        </button>
      </div>
    </div>
  );
}

export default UserItem;

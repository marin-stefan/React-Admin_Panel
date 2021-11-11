import React from "react";
import "./BtnShadow.css";
import "./UserItem.css";

function UserItem(props) {
  const { id, name, email, isGoldClient, deleteUserItem } = props;
  return (
    <div className="bg-warning rounded-3 border border-warning card user-item mx-1 my-2">
      <img
        className="card-img-top"
        src="http://chadhowsefitness.com/wp-content/uploads/2010/12/einstein.jpg"
        alt="Enstein"
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{email}</p>
        <p className="card-text">Salariu : 4990</p>
        {isGoldClient ? <h5 className="crad-text">Client GOLD</h5> : null}
        <button
          className="rounded-3 btn btn-primary btn-sm btn-shadow"
          onClick={() => deleteUserItem(id)}
        >
          Delete User
        </button>
      </div>
    </div>
  );
}

export default UserItem;

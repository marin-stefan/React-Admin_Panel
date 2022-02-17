import React from "react";
import "./BtnShadow.css";

function UserItem(props) {
  const { id, name, email, isGoldClient, deleteUserItem } = props;
  return (
    <div className=" bg-light rounded-3 border border-primary pt-1  col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-3 ">
      <img
        className="card-img-top border-bottom border-dark"
        src="https://i.ibb.co/dL4M53M/ugly.jpg"
        alt="funny ugly animal in a space suit"
      />
      <div className="card-body">
        <h3 className="card-title ">{name}</h3>
        <h6 className="card-text ">{email}</h6>
        <h6 className="card-text ">Salary : 4990</h6>
        {isGoldClient ? <h5 className="card-text">Client GOLD</h5> : null}
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

import React from "react";

function NavBar(props) {
  const { changeBackgroundColor, changeTextColor, changeTheDisplay } = props;
  return (
    <nav className="rounded-3 border border-warning mx-4 mb-2 shadow-lg d-flex justify-content-around px-3 py-3">
      <div className="btn-shadow bg-warning rounded border border-light">
        <label className="badge bg-secondary py-3 mx-2 mb-3 border border-primary" htmlFor="bg-color">
          Background color:
        </label>
        <input
          className="bg-light rounded"
          style={{ margin: "15px", cursor: "pointer" }}
          type="color"
          name="bg-color"
          id="bg-color"
          value="#ffbb33"
          onChange={(event) => changeBackgroundColor(event)}
        />
      </div>
      <div className="btn-shadow bg-warning rounded border border-light">
        <label className="badge bg-secondary py-3 mx-2 mb-3 border border-primary" htmlFor="color">
          Text color:
        </label>
        <input
          className="bg-light rounded"
          style={{ margin: "15px", cursor: "pointer" }}
          type="color"
          name="text-color"
          id="text-color"
          value="#ffbb33"
          onChange={(event) => changeTextColor(event)}
        />
      </div>

      <button
        type="button"
        className="btn btn-warning btn-shadow border-light"
        onClick={() => changeTheDisplay("posts")}
      >
        Show Posts
      </button>
      <button
        type="button"
        className="btn btn-warning btn-shadow border-light"
        onClick={() => changeTheDisplay("users")}
      >
        Show Users
      </button>
    </nav>
  );
}

export default NavBar;

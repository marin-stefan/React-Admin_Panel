import React from "react";

function NavBar(props) {
  const { changeBackgroundColor, changeTextColor, changeTheDisplay } = props;
  return (
    <nav className="rounded-3 border border-warning mx-4 mb-2 shadow-lg d-flex justify-content-around px-3 py-3">
      <div className="color-input-btn">
        <input
          type="color"
          name="color"
          id="color"
          value="#ffbb33"
          onChange={(event) => changeBackgroundColor(event)}
        />
        <label htmlFor="color">Background </label>
      </div>
      <div className="color-input-btn">
        <input
          type="color"
          name="color"
          id="color"
          value="#ffbb33"
          onChange={(event) => changeTextColor(event)}
        />
        <label htmlFor="color">Text</label>
      </div>

      <button
        type="button"
        className="btn btn-warning btn-shadow btn-sm"
        onClick={() => changeTheDisplay("posts")}
      >
        Show Posts
      </button>
      <button
        type="button"
        className="btn btn-warning btn-shadow "
        onClick={() => changeTheDisplay("users")}
      >
        Show Users
      </button>
    </nav>
  );
}

export default NavBar;

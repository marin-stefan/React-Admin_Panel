import React from "react";

function NavBar(props) {
  const { changeBackgroundColor, changeTextColor, changeTheDisplay } = props;
  return (
    <nav className="rounded-3 border border-warning my-2 shadow-lg container-md">
      <div className="row">
        <div className="col-sm-6 p-2 d-flex justify-content-around">
          <div className=" rounded border border-light fs-6 fw-bold">
            <label
              className=""
              htmlFor="bg-color"
            >
              Background color:&nbsp;
            </label>
            
            <input
              className=" rounded btn-shadow"
              style={{ cursor: "pointer" }}
              type="color"
              name="bg-color"
              id="bg-color"
              value="#ffbb33"
              onChange={(event) => changeBackgroundColor(event)}
            />
          </div>

          <div className=" rounded border border-light fs-6 fw-bold">
            <label
              className=""
              htmlFor="color"
            >
              Text color:&nbsp;
            </label>
            <input
              className="rounded btn-shadow"
              style={{ cursor: "pointer" }}
              type="color"
              name="text-color"
              id="text-color"
              value="#ffbb33"
              onChange={(event) => changeTextColor(event)}
            />
          </div>
        </div>




        <div className="col-sm-6 p-2 d-flex justify-content-around">
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
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

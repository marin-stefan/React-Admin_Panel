import React from "react";

function Footer() {
  return (
    <header className="d-flex justify-content-around shadow-lg py-4 rounded-3 mx-4 my-2 border border-warning">
      <div>
        <h4>Marin Stefan Daniel</h4>
        <h5>Javascript React course Project 1</h5>
        <h5>No rights Reserved 2021</h5>
      </div>
      <div>
        <h5>stefann06@yahoo.com</h5>
        <h5>0734576702</h5>
      </div>
      <div>
        <h5>
          {" "}
          <a href="./About">About</a>{" "}
        </h5>
        <h5>
          <a href="./">Home</a>
        </h5>
      </div>
    </header>
  );
}

export default Footer;

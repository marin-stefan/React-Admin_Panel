import React from "react";

function Footer() {
  return (
    <header className="d-flex justify-content-around shadow-lg py-4 rounded-3 mx-4 my-2 border border-warning bg-light">
      <div>
        <h4>Marin Stefan Daniel</h4>
        <h5>Javascript React course Project 1</h5>
        <h5>No rights Reserved &copy; 2022</h5>
        <h5>&#9993; stefann06@yahoo.com</h5>
      </div>
      <div>
        
        <h5>&#9743; +40734576702</h5>
        <h5>Follow me on &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/marinstefan">
            LinkedIn
          </a>
        </h5>
        <h5>I'm on &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/stefann06">
            GitHub
          </a>
        </h5>
        <h5>Theese are my  &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://marinstefan.herokuapp.com">
            Projects
          </a>
        </h5>
      </div>
      <div>
        <h5>
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

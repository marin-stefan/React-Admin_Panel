import React from "react";

function Footer() {
  return (
    <header className="container-md shadow-lg py-4 my-2 rounded-3  border border-warning bg-light">
      <div className="row ">
      <div className="col-lg-4">
        <h4>Marin Stefan Daniel</h4>
        <h5>Javascript React course Project 1</h5>
        <h5>No rights Reserved &copy; 2022</h5>
      </div>
      <div className="col-lg-4">
        <h5>
          Follow me on &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/marinstefan"
          >
            LinkedIn
          </a>
        </h5>
        <h5>
          I'm on &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/marin-stefan"
          >
            GitHub
          </a>
        </h5>
        <h5>
          These are my &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://marin-stefan.github.io/portfoliosimple/"
          >
            Projects
          </a>
        </h5>
      </div>

      <div className="col-lg-4">
        <h5>
          <a href="./">Home</a>
        </h5>
        <h5>
          <a href="./About">About</a>{" "}
        </h5>
        <h5>&#9993; stefann06@yahoo.com</h5>
        <h5>&#9743; +40734576702</h5>
      </div>
      </div>
    </header>
  );
}

export default Footer;

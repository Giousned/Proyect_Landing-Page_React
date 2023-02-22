import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create component
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg text-bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white  mx-auto" href="#">
          Start BootStrap
        </a>
		<div className="d-flex  mx-auto">
		<a className="nav-link active mx-1" aria-current="page" href="#">
          Home
        </a>
        <a className="nav-link mx-1 text-secondary" href="#">
          About
        </a>
        <a className="nav-link mx-1 text-secondary" href="#">
          Services
        </a>
        <a className="nav-link mx-1 text-secondary" href="#">
          Contact
        </a>

		</div>

      </div>
    </nav>
  );
};

export default NavBar;

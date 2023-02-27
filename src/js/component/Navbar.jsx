import React from "react";

//create component
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <a className="navbar-brand text-white ms-3" href="#">
          Start BootStrap
        </a>

        <button
            className="navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav d-flex ms-auto mb-2 mb-lg-0 fw-semibold">
              <li className="nav-item active">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  );
};

export default NavBar;

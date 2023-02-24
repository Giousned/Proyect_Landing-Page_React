import React from "react";

//create component
const NavBar = () => {
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

// AÑADIR PARA QUE AL HACERLO PEQUEÑO SALGA EL MENU DE HAMBURGUESA
{/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
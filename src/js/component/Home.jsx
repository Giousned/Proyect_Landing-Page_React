import React from "react";
import { useState } from "react";

import NavBar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Input from "./Input.jsx";
import CardsVariable from "./CardsVariable.jsx";  // Ejemplo con un input para varias cards variables
import Cards from "./Cards.jsx";  // Ejemplo cards fijas en 4
import Footer from "./Footer.jsx";

let contador = 4;

export const handleInputValor = (valor) => {
  contador = valor;
}


//create your first component
function Home() {
  const [estado, setEstado] = useState(contador);


  return (
    <>
      <div className="container-fluid">
        <NavBar />
      </div>
      <div className="container mb-4">
        <Jumbotron />
        <Input />
        {/* <Cards /> */}
        <CardsVariable valor={estado} funcionValor={handleInputValor()} />
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </>
  );
}

export default Home;
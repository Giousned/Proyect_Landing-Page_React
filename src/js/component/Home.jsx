import React from "react";

import NavBar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home() {
  return (
    <>
      <div className="container-fluid">
        <NavBar />
      </div>
      <div className="container mb-4 ">
        <Jumbotron />
        <Cards />
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </>
  );

  // <NavBar />
  // <Jumbotron />
  // <Card />
  // <Footer />
}

export default Home;

/* <div className="text-center">
<h1 className="text-center mt-5">Hello Rigo!</h1>
<p>
	<img src={rigoImage} />
</p>
<a href="#" className="btn btn-success">
	If you see this green button... bootstrap is working...
</a>
<p>
	Made by{" "}
	<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
	love!
</p>
</div> */

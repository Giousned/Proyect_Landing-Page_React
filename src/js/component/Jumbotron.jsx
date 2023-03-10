import React from "react";

//create your component
const Jumbotron = () => {
  return (
    <div className="m-3 p-4 bg-body-secondary">
      <h1 className="display-5 fw-semibold">A Warm Welcome!</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
        perspiciatis repudiandae sit, enim qui odio aliquid fugiat, quo ducimus
        blanditiis repellendus, reprehenderit suscipit minima sapiente.
      </p>
      <button className="btn btn-primary btn-lg mb-4" type="button">
        Call to action!
      </button>
    </div>
  );
};

export default Jumbotron;
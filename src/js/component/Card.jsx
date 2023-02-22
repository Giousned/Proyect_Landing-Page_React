import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// style= "width 18rem"

//create your first component
const Card = (props) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 mx-2">
      <div className="col">
        <div className="card text-center">
          <img
            src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png"
            className="card-img-top"
          />

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              totam eaque officiis similique inventore perspiciatis ratione
              suscipit voluptates.
            </p>
          </div>

          <div className="card-footer text-muted">
            <a href="#" className="btn btn-primary">
              Find Out More!
            </a>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card text-center">
          <img
            src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png"
            className="card-img-top"
          />

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              totam eaque officiis similique inventore perspiciatis ratione
              suscipit voluptates.
            </p>
          </div>

          <div className="card-footer text-muted">
            <a href="#" className="btn btn-primary">
              Find Out More!
            </a>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card text-center">
          <img
            src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png"
            className="card-img-top"
          />

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              totam eaque officiis similique inventore perspiciatis ratione
              suscipit voluptates.
            </p>
          </div>

          <div className="card-footer text-muted">
            <a href="#" className="btn btn-primary">
              Find Out More!
            </a>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card text-center">
          <img
            src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png"
            className="card-img-top"
          />

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              totam eaque officiis similique inventore perspiciatis ratione
              suscipit voluptates.
            </p>
          </div>

          <div className="card-footer text-muted">
            <a href="#" className="btn btn-primary">
              Find Out More!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

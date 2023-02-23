import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
// style= "width 18rem"

//create your component
const Card = (props) => {
  return (
    <div className="card text-center">
      <img
        src={props.imageUrl}
        className="card-img-top"
      />

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
        {props.text}
        </p>
      </div>

      <div className="card-footer text-muted">
        <a href={props.butonUrl} className="btn btn-primary">
        {props.butonLabel}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  butonUrl: PropTypes.string,
  butonLabel: PropTypes.string,
};

export default Card;
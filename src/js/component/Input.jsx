import React from "react";
// import { useState } from "react";

//create your component
const Input = (props) => {

  return (
    <div className="d-flex">
      <form className="mx-auto">
        <label>
          SIZE:
          <input
            type="text"
            name="size"
            className="mx-2"
            onChange={(e) => props.funcionValor(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default Input;


{/*
  const [value, setValue] = useState(); 
<input
type="text"
name="size"
className="mx-2"
value={value}
onChange={(e) => {
  setValue(e.target.value);
  props.funcionValor(e.target.value);
}} */}
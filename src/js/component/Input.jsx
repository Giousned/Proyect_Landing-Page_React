import React from "react";
import { useState } from "react";

// import { handleInputValor } from "./Home";


//create your component
const Input = () => {
  const [value, setValue] = useState();

  return (
    <div className="d-flex">
      <form className="mx-auto">
        <label>
          SIZE:
          <input
            type="text"
            name="size"
            className="mx-2"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              handleInputValor(e.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
}

export default Input;
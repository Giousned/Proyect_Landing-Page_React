import React from "react";
import { useState } from "react";


//create your component
export function Input() {
  const [value, setValue] = useState("");

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
            onChange={(e) => setValue(e.target.value)}
            id="inputValor"
          />
        </label>
      </form>
    </div>
  );
}

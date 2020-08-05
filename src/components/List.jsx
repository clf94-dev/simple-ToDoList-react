import React, { useState } from "react";

var lineThrough = false;

function List(props) {
  const [decoration, setDecoration] = useState("");
  function handleClick() {
    if (!lineThrough) {
      setDecoration("line-through");
      lineThrough = true;
    } else {
      setDecoration("");
      lineThrough = false;
    }
  }

  return (
    <div>
      <li onClick={handleClick} style={{ textDecoration: decoration }}>
        {props.itemText}
      </li>
    </div>
  );
}

export default List;

import React from "react";

export default props => (
  <div>
    <p>Name: {props.name}</p>
    <input type="text" value={props.name} onChange={props.changeName} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
);

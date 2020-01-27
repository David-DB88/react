import React from "react";

export default props => (
  <div>
    <p>Anun: {props.name}</p>
    <input type="text" value={props.name} onChange={props.changeName} />
    <p>Azganun: {props.lastName}</p>
    <input type="text" value={props.lastName} onChange={props.changeLastName} />
    <br />
    <button onClick={props.onHandleClick}>Change Title</button>
    <h3>----------------------------------------------------------</h3>
  </div>
);

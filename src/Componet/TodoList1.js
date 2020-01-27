import React, { Component } from "react";

class TodoList1 extends Component {
  render() {
    return (
      <ul>
        {this.props.chashatesak.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList1;

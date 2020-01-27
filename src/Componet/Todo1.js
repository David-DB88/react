import React, { Component } from "react";
import TodoList1 from "./TodoList1";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itmes: [],
      text: ""
    };
    this.handlClick = this.handlClick.bind(this);
    this.handlSubmit = this.handlSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <h3>Work List</h3>
        <TodoList1 itmes={this.state.itmes} />
        <form onSubmit={this.handlSubmit}>
          <label>Need to do</label>
          <input
            type="Text"
            value={this.state.text}
            onChange={this.handlClick}
          />
          <button>Add#{this.state.itmes.length + 1}</button>
        </form>
      </div>
    );
  }
  handlClick(e) {
    this.setState({
      text: e.target.value
    });
  }
  handlSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newText = [
      {
        text: this.state.text,
        id: new Date()
      }
    ];
    this.setState({
      itmes: this.state.itmes.concat(newText),
      text: ""
    });
  }
}

export default Todo;

import React, { Component } from "react";

class App extends Component {
  state = {
    pageTitle: [{ name: "Page Tit" }]
  };

  handleClick = () => {
    // console.log("change", event.target.value);
    let x = document.getElementById("asd").value;
    this.setState({
      pageTitle: x
    });
  };

  // handleClick = event => {
  //   this.setState({
  //     pageTitle: event.target.value
  //   });
  // };

  render() {
    return (
      <div>
        <h1>{this.state.pageTitle}</h1>;
        <input type="text" id="asd" />
        <button onClick={this.handleClick}>Change Title</button>
      </div>
    );
  }
}
export default App;

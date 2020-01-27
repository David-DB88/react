import React, { Component } from "react";
import Car from "./Car";
class App extends Component {
  state = {
    cars: [{ name: "Audi" }, { name: "BMW" }, { name: "Mersedes" }],
    pageTitle: "Page Title"
  };

  handleClick = () => {
    let newTitle = "Title Changed!";
    this.setState({
      pageTitle: newTitle
    });
  };
  render() {
    let avto = null;
    if (this.state.showContent) {
      avto = this.state.cars.map((car, index) => {
        return (
          <MyCars
            key={index}
            name={car.name}
            onDelete={this.deleteComponent.bind(this, index)}
            changeName={event => this.changeName(event.target.value, index)}
          />
        );
      });
    }
    return (
      <div>
        <h1>{this.state.pageTitle} </h1>
        <button onClick={this.handleClick}>Change Title</button>
        <Car name={cars[0].name} />
        <Car name={cars[1].name} />
        <Car name={cars[2].name} />
      </div>
    );
  }
}
export default App;

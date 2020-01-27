import React, { Component } from "react";
import DishesList from "./DishesList";

class Dishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chashatesak: [
        {
          name: "Peperony",
          ingredients: ["Artichokes", "greens", "Asparagus", "Beans"]
        },
        {
          name: "Lasagna",
          ingredients: ["Broccoli", "Brussels sprouts", "Capsicums", "Carrots"]
        },
        {
          name: "udon",
          ingredients: ["Celeriac", "Celery", "Chilli peppers", "Chokos"]
        },
        {
          name: "onigir",
          ingredients: ["Cucumber", "Eggplant", "Fennel", "Garlic"]
        },
        {
          name: "nachos",
          ingredients: ["Ginger", "Kohlrabi", "Kūmara", "Leeks"]
        }
      ]
    };
  }
  deleteComponent(index) {
    const blud = this.state.chashatesak.concat(); // Ստեղծում է օբյեկտի կրկնորինակ առանց ES6-ի!
    blud.splice(index, 1);
    this.setState({
      chashatesak: blud
    });
  }
  render() {
    return (
      <div>
        {this.state.chashatesak.map((item, index) => (
          <DishesList
            itmes={item.name}
            indg={item.ingredients}
            onDelete={this.deleteComponent.bind(this, index)}
          />
        ))}
      </div>
    );
  }
}

export default Dishes;

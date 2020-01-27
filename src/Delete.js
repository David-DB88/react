import React, { Component } from "react";
import MyCars from "./Car";
// import s from "../App.module.css";
// ԻՆչ է ավելանում այս կոմպոնենտում (react.js 20 )
// 1․ Ամեն մի կոմպոնենտում ավելանում է input կոնկրետ իր վերնագիրը փոխելու համար
// 2․ Կոդը ձևափոխվում է, կոմպոնենտում ամեն մի կոճակ ջնյում է րիեն DOM-ից
// 3. MyCars կոմպոնենտը պետք չէ ինչ-որ բան անի նա ուղղակի պետք է նկարի փողանցած որևիցե էլեմենտներ
// 4. Կոմպոնենտում ավելացվում է կոճակ, որը ջնջում է կոնկրետ կոմպոնենտը․․․
//    բոլոր էլեմենտները(ամբողջ state-ը) պետք է պահվի արմատային էլեմենտում։ՍԱ Է React.js-ի հիմնական կանոնը!
class App extends Component {
  state = {
    cars: [{ name: "Audi" }, { name: "Ford" }, { name: "Mersedes" }],
    pageTitle: "Page Title",
    showContent: false
  };

  showDiv = () => {
    this.setState({
      showContent: !this.state.showContent
    });
  };
  handleClick(name) {
    this.setState({
      pageTitle: name
    });
  }
  //add
  changeName(name, index) {
    // console.log(name, index);
    const car = this.state.cars[index]; // Գտնում ենք այն մեքենան, թրի անունը ուզում ենք փոխել
    car.name = name;
    // քանի․ որ state օբյեկտը միանգամից չի կարելի փոխել մենք
    // պետք է սարքենք այդ օբյեկտի կրկնորինակը և աշխատենք նրա հետ։ES6 օրինակով․՝
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars: cars
    });
  }
  //Deleted Component
  // եթե օգտագործենք այս տիպի  ֆունկցիա պետք է կանչելուց նաև bind(this, ...) օգտագործել
  // կամ պետք է փոխել այն՝ սարքելով սլաքային
  deleteComponent(index) {
    const cars = this.state.cars.concat(); // Ստեղծում է օբյեկտի կրկնորինակ առանց ES6-ի!
    cars.splice(index, 1);
    this.setState({
      cars
    });
  }
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
        <h1>{this.state.pageTitle}</h1>
        {avto}
        <button onClick={this.showDiv}>Show Components</button>
      </div>
    );
  }
}
export default App;

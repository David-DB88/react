import React, { Component } from "react";
import MyPerson from "./Person";
// import s from "../App.module.css";
// ԻՆչ է ավելանում այս կոմպոնենտում (react.js 20 )
// 1․ Ամեն մի կոմպոնենտում ավելանում է input կոնկրետ իր վերնագիրը փոխելու համար
// 2․ Կոդը ձևափոխվում է, կոմպոնենտում ամեն մի կոճակ ջնյում է րիեն DOM-ից
// 3. MyCars կոմպոնենտը պետք չէ ինչ-որ բան անի նա ուղղակի պետք է նկարի փողանցած որևիցե էլեմենտներ
// 4. Կոմպոնենտում ավելացվում է կոճակ, որը ջնջում է կոնկրետ կոմպոնենտը․․․
//    բոլոր էլեմենտները(ամբողջ state-ը) պետք է պահվի արմատային էլեմենտում։ՍԱ Է React.js-ի հիմնական կանոնը!
class App extends Component {
  state = {
    persons: [
      { name: "Anun", lastName: "Azganun" },
      { name: "Anun", lastName: "Azganun" },
      { name: "Anun", lastName: "Azganun" },
      { name: "Anun", lastName: "Azganun" },
      { name: "Anun", lastName: "Azganun" }
    ],
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
    const person = this.state.persons[index]; // Գտնում ենք այն մեքենան, թրի անունը ուզում ենք փոխել
    person.name = name;
    // քանի․ որ state օբյեկտը միանգամից չի կարելի փոխել մենք
    // պետք է սարքենք այդ օբյեկտի կրկնորինակը և աշխատենք նրա հետ։ES6 օրինակով․՝
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({
      persons: persons
    });
  }
  changeLastName(lastName, index) {
    // console.log(name, index);
    const person = this.state.persons[index]; // Գտնում ենք այն մեքենան, թրի անունը ուզում ենք փոխել
    person.lastName = lastName;
    // քանի․ որ state օբյեկտը միանգամից չի կարելի փոխել մենք
    // պետք է սարքենք այդ օբյեկտի կրկնորինակը և աշխատենք նրա հետ։ES6 օրինակով․՝
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({
      persons: persons
    });
  }
  //Deleted Component
  // եթե օգտագործենք այս տիպի  ֆունկցիա պետք է կանչելուց նաև bind(this, ...) օգտագործել
  // կամ պետք է փոխել այն՝ սարքելով սլաքային
  handleClick = index => {
    // console.log("change", event.target.value);

    this.setState({
      pageTitle:
        this.state.persons[index].name +
        " " +
        this.state.persons[index].lastName
    });
  };
  render() {
    let people = null;
    if (this.state.showContent) {
      people = this.state.persons.map((person, index) => {
        return (
          <MyPerson
            key={index}
            name={person.name}
            lastName={person.lastName}
            onHandleClick={this.handleClick.bind(this, index)}
            changeName={event => this.changeName(event.target.value, index)}
            changeLastName={event =>
              this.changeLastName(event.target.value, index)
            }
          />
        );
      });
    }
    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        {people}
        <button onClick={this.showDiv}>Show Components</button>
      </div>
    );
  }
}
export default App;

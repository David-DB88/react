// import React, { Component } from "react";
// import MyCar from "./Car";
// class App extends Component {
//   state = {
//     cars: [{ name: "Audi" }, { name: "BMW" }, { name: "Mersedes" }],
//     showdiv: false
//   };

//   changeValue = () => {
//     this.setState({
//       showdiv: !this.state.showdiv
//     });
//   };
//   render() {
//     let car = null;
//     if (this.state.showdiv) {
//       car = this.state.cars.map((car, index) => {
//         return <MyCar key={index} name={car.name} />;
//       });
//     }
//     return (
//       <div>
//         {car}
//         <button onClick={this.changeValue}>Show Components</button>
//       </div>
//     );
//   }
// }

// export default App;

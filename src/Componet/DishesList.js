import React, { Component } from "react";
import PropTypes from "prop-types";

class DishList extends Component {
  render() {
    return (
      <div>
        <ul>
          <h1>{this.props.itmes}</h1>
          {this.props.indg.map((i, index) => (
            <li key={index}>
              <p>{i}</p>
            </li>
          ))}
          <button onClick={this.props.onDelete}>Delete</button>
        </ul>
      </div>
    );
  }
}

// DishList.propTypes = {
//   itmes: PropTypes.arrayOf(PropTypes.number)
// };

DishList.propTypes = {
  itmes: PropTypes.string,
  indg: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func
};

export default DishList;

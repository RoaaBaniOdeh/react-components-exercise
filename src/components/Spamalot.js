import Spam from "./Spam";
import React, { Component } from "react";

class Spamalot extends Component {
  render() {
    let array = [];
    for (let index = 0; index < 50; index++) {
      array.push(<Spam />);
    }
    return array;
  }
}

export default Spamalot;

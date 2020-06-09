import React, { Component } from "react";
import Cell from './cell'

export default class Matrix extends Component {
  genRow = (vals) => {
    // console.log(vals)
    return vals.map((val,i) => <Cell key={i} value={val}/>); // replace me and render a cell component instead!
  };

  genMatrix = () => {
    return this.props.values.map((rowVals, i) => (
      <div key={i} className="row">{this.genRow(rowVals)}</div>
    ));
  };

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}

Matrix.defaultProps = {
  values: [
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
  ],
};

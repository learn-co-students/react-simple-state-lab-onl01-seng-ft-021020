import React, { Component } from 'react';
import Cell from './Cell.js';

export default class Matrix extends Component {
  
  genRow = (vals) => //adds rows
   {
    //return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
    return vals.map(val => <Cell value={val} />)
  }
  //function
  genMatrix = () => //adds collums
  {
    //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    //this.props is defalt props
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render()//returns all
   {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}
// The defaultProps will be used to ensure that this.props.name will have a value if it was not specified by the parent component. 
Matrix.defaultProps = {
  values: [
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  ]
} 
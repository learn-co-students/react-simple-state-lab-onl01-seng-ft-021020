import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

//ReactDOM.render() controls the contents of the container node you pass in. 
//values={pattern1} is the node getting passed
//getElementById() returns an Element object representing the element whose id property matches the specified string.
ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root')); //i am rendering the thing in Matrix

import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './components/buttons';

import "./index.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "",
      store: []
    }

    this.changeDisplayValue = this.changeDisplayValue.bind(this);
    this.changeStore = this.changeStore.bind(this);
  }

  changeDisplayValue(newValue) {
    this.setState({displayValue: newValue});
  }

  changeStore(e) {

    // Get operator that called this function
    let operator = e.target.innerHTML;

    //console.log(operator); 
    switch(operator) {
      case "−": operator = "-"; break;
      case "÷": operator = "/"; break;
      case "×": operator = "*"; break;
      case "+": operator = "+"; break;
      default: operator = "="; break;
    }
  
    // Get value displayed on the calculator
    let currentDisplayValue = this.state.displayValue;

    // If nothing has been entered into the calculator, do nothing
    if (currentDisplayValue === "") {
      return;
    }

    // Get current array in the store
    let newStore = this.state.store;

    // Push display value to newStore
    newStore.push(currentDisplayValue);

    // Push operator to newStore (as long as it is not an equal sign)
    if (operator !== "=") {
      newStore.push(operator);
    }

    // Update store
    this.setState({store: newStore});
    this.changeDisplayValue("");

    // Evaluate expression if the equal sign was pressed
    if (operator === "=") {
      this.evaluate(); 
      return;
    }
  }

  evaluate() {
    // Save the store
    let array = this.state.store;

    // Reset the store
    this.setState({store: []});
    console.log(array);
    console.log(array.join(" "));
    let expression = array.join(" ");
    let result = eval(expression);
    console.log(result);
    this.setState({displayValue: result});
    /*
      Example: input -> [1, +, 3];   output -> 4
      Example: input -> [1, /, 3, *, 9, +, 14, -, 3];    output -> 
                        [0.3, *, 9, +, 14, 0, 3]
                        []
      1. Traverse through array and find * or /
      2. 
    */ 
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Calculator</span>
        </nav>
        <div id="calculator-container">
          <center>
            <Buttons 
              change={this.changeDisplayValue} 
              value={this.state.displayValue}
              changeStore={this.changeStore}
            />
          </center>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
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

  /* Used to add a number to the display of the calculator
   This is called when a number 0-9 is clicked */
  changeDisplayValue(newValue) {
    this.setState({displayValue: newValue});
  }

  /* This method is called whenever an operator i.e. (+, -, *, /, =) is clicked.
     If one of the arithmetic operators is clicked, this method adds the current
     display value and the operator that was clicked to the store. Otherwise, it 
     evaluates the elements in the store and displays the result. */
  changeStore(e) {

    // Get operator that called this function
    let operator = e.target.innerHTML;

    // Exchange symbols for the actual javascript operators. Example: ÷ => /
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

    // Update store and clear display
    this.setState({store: newStore});
    this.changeDisplayValue("");

    // Evaluate expression if the equal sign was clicked
    if (operator === "=") {
      this.evaluate(); 
      return;
    }
  }
 
  /* This method evaluates the expression in the store 
     and displays the result on the calculator's display. */
  evaluate() {
    // Save a copy of the store
    let array = this.state.store;

    // Reset the store
    this.setState({store: []});

    // Evaluate expression and display result
    let expression = array.join(" ");
    let result = eval(expression);
    this.setState({displayValue: result});
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

// Render app in div "root"
ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './components/buttons';

import "./index.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    }

    this.addToDisplay = this.addToDisplay.bind(this);
  }

  addToDisplay(number) {
    let newValue = this.state.value;
    this.setState({});
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Calculator</span>
        </nav>
        <div id="calculator-container">
          <center>
            <Buttons/>
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
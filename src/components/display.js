import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayValue: ""
    }
  }

  render() {
    return (
      <div id="display">
        <input id="display-input" value={this.state.displayValue} onChange={e => this.setState({displayValue: e.target.value})} type="text" className="form-control" placeholder="0"></input>
      </div>
    );
  }
}

export default Display;
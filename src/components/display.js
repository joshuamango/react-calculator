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
        <input id="display-input" value={this.props.value} onChange={e => this.props.change(e.target.value)} type="text" className="form-control" placeholder="0"></input>
      </div>
    );
  }
}

export default Display;
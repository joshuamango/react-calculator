import React from 'react';
import Display from './display';

const Buttons = props => {
  return(
    <div className="container">
      <div className="row first">
        <Display/>
      </div>
      <div className="row">
        <button className="col-9">
          <p>clear</p>
        </button>
        <button className="col-3 operation">
          <p>&divide;</p>
        </button>
      </div>
      <div className="row">
        <button className="col-3">
          <p>7</p>
        </button>
        <button className="col-3">
          <p>8</p>
        </button>
        <button className="col-3">
          <p>9</p>
        </button>
        <button className="col-3 operation">
          <p>&times;</p>
        </button>
      </div>
      <div className="row">
        <button className="col-3">
          <p>4</p>
        </button>
        <button className="col-3">
          <p>5</p>
        </button>
        <button className="col-3">
          <p>6</p>
        </button>
        <button className="col-3 operation">
          <p>&minus;</p>
        </button>
      </div>
      <div className="row">
        <button className="col-3">
          <p>1</p>
        </button>
        <button className="col-3">
          <p>2</p>
        </button>
        <button className="col-3">
          <p>3</p>
        </button>
        <button className="col-3 operation">
          <p>+</p>
        </button>
      </div>
      <div className="row last">
        <button className="col-6 zero-button">
          <p>0</p>
        </button>
        <button className="col-3">
          <p style={{textAlign: "center"}}>.</p>
        </button>
        <button className="col-3 operation">
          <p>=</p>
        </button>
      </div>
    </div>
  );
}

export default Buttons;
import React from 'react';
import Display from './display';

const Buttons = props => {
  return(
    <div className="container">
      <div className="row first">
        <Display change={props.change} value={props.value}/>
      </div>
      <div className="row">
        <button className="col-9" onClick={e => props.change("")}>
          <p>clear</p>
        </button>
        <button className="col-3 operation" onClick={e => props.changeStore(e)}>
          <p>&divide;</p>
        </button>
      </div>
      <div className="row">
        <button className="col-3" onClick={e => props.change(props.value + 7)}>
          <p>7</p>
        </button>
        <button className="col-3" onClick={e => props.change(props.value + 8)}>
          <p>8</p>
        </button>
        <button className="col-3" onClick={e => props.change(props.value + 9)}>
          <p>9</p>
        </button>
        <button className="col-3 operation" onClick={e => {
          props.changeStore(e);
        }}>
          <p>&times;</p>
        </button>
      </div>
      <div className="row">
        <button className="col-3" onClick={e => props.change(props.value + 4)}>
          <p>4</p>
        </button>
        <button className="col-3" onClick={e => props.change(props.value + 5)}>
          <p>5</p>
        </button>
        <button className="col-3" onClick={e => props.change(props.value + 6)}>
          <p>6</p>
        </button>
        <button className="col-3 operation" onClick={e => props.changeStore(e)}>
          <p>&minus;</p>
        </button>
      </div>
      <div className="row">
        <button className="col-3" onClick={e => props.change(props.value + 1)}>
          <p>1</p>
        </button>
        <button className="col-3" onClick={e => props.change(props.value + 2)}>
          <p>2</p>
        </button>
        <button className="col-3" onClick={e => props.change(props.value + 3)}>
          <p>3</p>
        </button>
        <button className="col-3 operation" onClick={e => props.changeStore(e)}>
          <p>+</p>
        </button>
      </div>
      <div className="row last">
        <button className="col-6 zero-button" onClick={e => props.change(props.value + 0)}>
          <p>0</p>
        </button>
        <button className="col-3" onClick={e => props.change(props.value + ".")}>
          <p style={{textAlign: "center"}}>.</p>
        </button>
        <button className="col-3 operation" onClick={e => props.changeStore(e)}>
          <p>=</p>
        </button>
      </div>
    </div>
  );
}

export default Buttons;
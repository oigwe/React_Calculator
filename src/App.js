import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
    }
  }


  render() {
    return (
      <>
        <div id="root">
          <div className="holder">
            <div className="calculator">
              <div className="col-12 inputview">{}0</div>
              <div className="row">
              <button className>AC</button>
              <button className="button col-3"  data-attribute="add">%</button>
              <button className="button col-3 ">+/-</button>
                <button className="button col-3">÷</button>
              </div>
              <div className="row">
                <button className="button col-3">7</button>
                <button className="button col-3">8</button>
                <button className="button col-3">9</button>
                <button className="button col-3 orange">x</button>
              </div>
              <div className="row">
                <button className="button col-3">4</button>
                <button className="button col-3">5</button>
                <button className="button col-3">6</button>
                <button className="button col-3 orange">-</button>
              </div>
              <div className="row">
                <button className="button col-3">1</button>
                <button className="button col-3">2</button>
                <button className="button col-3">3</button>
                <button className="button col-3 orange">+</button>
              </div>
              <div className="row">
                <button className="button col-6">0</button>
                <button className="button col-3">.</button>
                <button className="button col-3 orange">=</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

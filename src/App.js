import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons'

class App extends Component {

  constructor(props) {
    super(props);
    this.displayreset = 0;
    this.state = {
      displayValue: this.displayreset,
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
    }
  }

  handleNumber = (e) => {
    let newNumber = e.target.value.toString();
    let display = this.state.displayValue;
    let inner = e.target.innerText;

    if (inner === 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) {
      let newDisplay = (display += newNumber);
      this.setState({displayValue: newDisplay })
    }
  }
  handleOperator = (e) =>{
    let inner = e.target.innerText;
    let display = this.state.displayValue;

    if (inner === "A/C") {
      this.setState({displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: false})
    }
    if (inner === "%") {
      this.setState({ displayValue: (display / 100) })
    }
    if (e.target.id ==="negPos"){
      this.setState({displayValue: display * -1})
    }
    if(inner === "C") {

    }
    if(inner === ".") {
      const displayStr = display.toString();
      if(displayStr.includes(".")){
        return
      }
      else {this.setState({displayValue: display += "."})
    }
  }
  }

  render() {
    return <>
      <div className="holder">
        <div className="calculator">
          <div className="col-12 inputview">{this.state.displayValue}</div>
          <div className="row">
            <button className="button col-3" id="AC" onClick={this.handleOperator}>A/C</button>
            <button className="button col-3" id="percent" onClick={this.handleOperator}>%</button>
            <button className="button col-3" id="negPos" onClick={this.handleOperator}>±</button>
            <button className="button col-3 orange" id="divide" onClick={this.handleOperator}>÷</button>
          </div>
          <div className="row">
            <button onClick={this.handleNumber} className="button col-3" value="7" >7</button>
            <button onClick={this.handleNumber} className="button col-3" value="8" >8</button>
            <button onClick={this.handleNumber} className="button col-3" value="9" >9</button>
            <button onClick={this.handleClick} className="button col-3 orange">x</button>
          </div>
          <div className="row">
            <button onClick={this.handleNumber} className="button col-3" value="4" >4</button>
            <button onClick={this.handleNumber} className="button col-3" value="5" >5</button>
            <button onClick={this.handleNumber} className="button col-3" value="6" >6</button>
            <button className="button col-3 orange">-</button>
          </div>
          <div className="row">
            <button onClick={this.handleNumber} className="button col-3" value="1" >1</button>
            <button onClick={this.handleNumber} className="button col-3" value="2" >2</button>
            <button onClick={this.handleNumber} className="button col-3" value="3" >3</button>
            <button onClick={this.handleOperator} className="button col-3 orange">+</button>
          </div>
          <div className="row">
            <button onClick={this.handleOperator} className="button col-6" value="0" >0</button>
            <button className="button col-3" onClick={this.handleOperator}>.</button>
            <button className="button col-3 orange" onClick={this.handleOperator}>=</button>
          </div>
        </div>
      </div>
    </>
  }
}

export default App;

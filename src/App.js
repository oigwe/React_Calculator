import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      displayValue: '',
      previousValue: '',
      operation: null,
    }
  }

  newNumDisplay = (e) => {
    let newNumber = e.target.value.toString();
    let display = this.state.displayValue;
    this.setState({ displayValue: display += newNumber });
    console.log(this.state.displayValue)
  }
  handleOperation = (e) => {
    if (e.target.id === "percent") {
      let display = this.state.displayValue;
      const parsedNumber = parseInt(display);
      console.log(parsedNumber / 100);
      this.setState({ displayValue: (parsedNumber / 100) });
    }
    if (e.target.id === "plus") {
      const plusAnswer = () => {
        this.state.previousValue  = this.state.displayValue;
        this.state.displaValue = "";
        this.state.operation= "plus";
        let answer = parseInt(this.state.previousValue) + parseInt(this.state.displayValue);
        return answer;
      }
      this.setSetate(
        {
        displayValue: plusAnswer()}
      );
    }
  }


  render() {
    return (
      <>
        <div id="root">
          <div className="holder">
            <div className="calculator">
              <div className="col-12 inputview">{this.state.displayValue}</div>
              <div className="row">
                <button className="button col-3">AC</button>
                <button className="button col-3" onClick={this.handleOperation} id='percent'>%</button>
                <button className="button col-3">±</button>
                <button className="button col-3 orange">÷</button>
              </div>
              <div className="row">
                <button onClick={this.newNumDisplay} className="button col-3" value="7" >7</button>
                <button onClick={this.newNumDisplay} className="button col-3" value="8" >8</button>
                <button onClick={this.newNumDisplay} className="button col-3" value="9" >9</button>
                <button onClick={this.newNumDisplay} className="button col-3 orange">x</button>
              </div>
              <div className="row">
                <button onClick={this.newNumDisplay} className="button col-3" value="4" >4</button>
                <button onClick={this.newNumDisplay} className="button col-3" value="5" >5</button>
                <button onClick={this.newNumDisplay} className="button col-3" value="6" >6</button>
                <button className="button col-3 orange">-</button>
              </div>
              <div className="row">
                <button onClick={this.newNumDisplay} className="button col-3" value="1" >1</button>
                <button onClick={this.newNumDisplay} className="button col-3" value="2" >2</button>
                <button onClick={this.newNumDisplay} className="button col-3" value="3" >3</button>
                <button className="button col-3 orange" onClick={this.handleOperation} id='plus'>+</button>
              </div>
              <div className="row">
                <button onClick={this.newNumDisplay} className="button col-6" value="0" >0</button>
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

import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons'
import Display from './components/Display'

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
         <Display display= {this.state.displayValue}/>
          <div className="row">

          <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
          </div>

          <div className="row">
            <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
          </div>

          <div className="row">
          <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
          </div>

          <div className="row">
          <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
          </div>

        
          <div className="row">
          <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
            <Buttons onClick={this.handleNumber}/>
          </div>
        </div>
      </div>
    </>
  }
}

export default App;

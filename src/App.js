import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Display from './components/Display'

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      previousValue: '',
      newValue: '',
      resultStorage: '',
      operation: null,
      waitingForNewValue: false,
    }
  }

  handleClick = (e) => {
    const click = e.target;
    const action = click.dataset.action;
    const buttonContent = click.innerText;


    if (e.target.matches('button')) {
      if (!action) {
        if (this.state.displayValue === '0' || this.state.displayValue==="minus" || this.state.displayValue === 'add' || this.state.displayValue === 'divide' || this.state.displayValue === 'multiple'|| this.state.waitingForNewValue === true) {
          this.setState({ displayValue: buttonContent, waitingForNewValue: false})
        }
        else if(this.state.operation){
          this.setState({ displayValue: this.state.displayValue + buttonContent})
        }
        else {
          this.setState({ displayValue: this.state.displayValue + buttonContent})
        }
      }

  if(action){
      if(action === "percent"){
        this.setState({displayValue: this.state.displayValue/100})
      }
      if(action === "AC"){
        this.setState({ displayValue: '0',
        previousValue: '',
        newValue: '',
        resultStorage: '',
        operation: null,
        waitingForNewValue: false})
      }

      if(action ==="negPos"){
        this.setState({displayValue: (parseInt(this.state.displayValue)*-1)})
      }

      if (action === 'decimal') {
        if (this.state.displayValue.includes('.')) {
          return
        }
        else {
          this.setState({ displayValue: this.state.displayValue + "." })
        }
      }

      
      if(action==="add"){
        if(this.state.resultStorage){
          const results = Number(this.state.resultStorage) + Number(this.state.displayValue);
          this.setState({displayValue: results, waitingForNewValue: true, previousValue: "", resultStorage: results})
        }
        else if(this.state.previousValue && this.state.displayValue){
          const results = Number(this.state.previousValue)+ Number(this.state.displayValue);
          this.setState({displayValue: results, previousValue: "", operation: "add", waitingForNewValue: true, resultStorage: results})
        }
        else{
          this.setState({previousValue: this.state.displayValue, operation: "add", displayValue: "add" })
      }
    }
    if(action==="subtract"){
      if(this.state.resultStorage){
        const results = Number(this.state.resultStorage)- Number(this.state.displayValue);
        this.setState({displayValue: results, waitingForNewValue: true, previousValue: "", resultStorage: results})
      }
      else if(this.state.previousValue && this.state.displayValue){
        const results = Number(this.state.previousValue)- Number(this.state.displayValue);
        this.setState({displayValue: results, previousValue: "", operation: "minus", waitingForNewValue: true, resultStorage: results})
      }
      else{
        this.setState({previousValue: this.state.displayValue, operation: "minus", displayValue: "minus" })
    }
  }
  if(action==="multiply"){
    if(this.state.resultStorage){
      const results = Number(this.state.resultStorage)*Number(this.state.displayValue);
      this.setState({displayValue: results, waitingForNewValue: true, previousValue: "", resultStorage: results})
    }
    else if(this.state.previousValue && this.state.displayValue){
      const results = Number(this.state.previousValue)- Number(this.state.displayValue);
      this.setState({displayValue: results, previousValue: "", operation: "multiply", waitingForNewValue: true, resultStorage: results})
    }
    else{
      this.setState({previousValue: this.state.displayValue, operation: "multiply", displayValue: "multiply" })
  }
}
if(action==="divide"){
  if(this.state.resultStorage){
    const results = Number(this.state.resultStorage)/Number(this.state.displayValue);
    this.setState({displayValue: results, waitingForNewValue: true, previousValue: "", resultStorage: results})
  }
  else if(this.state.previousValue && this.state.displayValue){
    const results = Number(this.state.previousValue)- Number(this.state.displayValue);
    this.setState({displayValue: results, previousValue: "", operation: "divide", waitingForNewValue: true, resultStorage: results})
  }
  else{
    this.setState({previousValue: this.state.displayValue, operation: "divide", displayValue: "divide" })
}
}
    }
  }
}
  render() {
    return <>
      <div className="holder">
        <div className="calculator">
         <Display display= {this.state.displayValue}/>
          <Buttons onClick={this.handleClick}/>
        </div>
      </div>
    </>
  }
}

export default App
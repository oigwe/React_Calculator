import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import handleCalculate from './logic/calculation';


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

      
      
      /*if(action === "add"){
        if(this.state.previousValue && this.state.displayValue){
          const results = Number(this.state.previousValue)+ Number(this.state.displayValue);
          this.setState({displayValue: results, resultStorage: results, waitingForNewValue: true })
        }
        else
          this.setState({previousValue: this.state.displayValue, operation: "add", displayValue: "add"});
          setTimeout(e => {
            console.log(3, this.state)
          }, 3000)
      
    }*/
      /*if(action === "add"){
        if(this.state.previousValue){
          const results = Number(this.state.previousValue)+ Number(this.state.displayValue);
          this.setState({displayValue: results, waitingForNewValue: false, operation: "add", result: true, resultStorage: results, previousValue: this.state.displayValue})        
        }
        if(this.state.resultStorage){
          const results = Number(this.state.resultStorage) + Number(this.state.displayValue);
          this.setState({displayValue: results, resultStorage: results})
          }
        else{
          this.setState({previousValue: this.state.displayValue, displayValue: "add", waitingForNewValue: true, operation: "add", result: false})
        }
      }*/

      /*if(action==='add'){
        if(this.state.previousValue){
          console.log("A")
          const result = Number(this.state.previousValue)+ Number(this.state.displayValue);
          this.setState({displayValue: result})
        }
       else if(this.state.waitingForNewValue){
         console.log("B")
        this.setState({previousValue: this.state.displayValue, displayValue: "",  waitingForNewValue: true, operation: "Add"})
      }
    }*/
      
      /*if (action) {
        if (action=== "add") {
          if(this.state.waitingForNewValue === true){
            if(this.state.previousValue){
              const result = Number(this.state.previousValue) + Number(this.state.displayValue);
              this.setState({displayValue: result})
            }
            if(!this.state.previousValue){

            }
          }
          this.setState({operation: action, previousValue: this.state.displayValue, waitingForNewValue: true})
        }
       
        if (action === "multiply"){
          if(this.state.waitingForNewValue === true){
          const result = Number(this.state.previousValue) * Number(this.state.displayValue);
          this.setState({previousValue: result, displayValue: result})
        }
        this.setState({operation: action, previousValue: this.state.displayValue, waitingForNewValue: true})
      }
        if (action === "divide") {
          if(this.state.waitingForNewValue === true){
            const result = Number(this.state.previousValue)/Number(this.state.displayValue);
            this.setState({previousValue: result, displayValue: result})
          }
          this.setState({operation: action, previousValue: this.state.displayValue, waitingForNewValue: true})
        }
        if (action === "subtract") {
          if(this.state.waitingForNewValue === true){
            console.log("sub1")
            const result = Number(this.state.previousValue) - Number(this.state.displayValue);
            this.setState({displayValue: result, waitingForNewValue: false})
          }
          else{console.log("sub2")
          this.setState({operation: action, previousValue: this.state.displayValue, waitingForNewValue: true})
        }}
      }*/
    }
  }
}
  render() {
    return <>
      <div className="holder">
        <div className="calculator">
          <div className="col-12 inputview">{this.state.displayValue}</div>
          <div className="row">
            <button onClick={this.handleClick} className="button col-3" data-action="AC">AC</button>
            <button onClick={this.handleClick} className="button col-3" data-action="percent">%</button>
            <button onClick={this.handleClick} className="button col-3" data-action="negPos">+/-</button>
            <button onClick={this.handleClick} className="button col-3 orange" data-action="divide">/</button>
          </div>
          <div className="row">
            <button onClick={this.handleClick} className="button col-3" value="7">7</button>
            <button onClick={this.handleClick} className="button col-3" value="8">8</button>
            <button onClick={this.handleClick} className="button col-3" value="9">9</button>
            <button onClick={this.handleClick} className="button col-3 orange" data-action="multiply">x</button>
          </div>
          <div className="row">
            <button onClick={this.handleClick} className="button col-3" value="4" >4</button>
            <button onClick={this.handleClick} className="button col-3" value="5" >5</button>
            <button onClick={this.handleClick} className="button col-3" value="6" >6</button>
            <button className="button col-3 orange" data-action="subtract" onClick={this.handleClick}>-</button>
          </div>
          <div className="row">
            <button onClick={this.handleClick} className="button col-3" value="1" >1</button>
            <button onClick={this.handleClick} className="button col-3" value="2" >2</button>
            <button onClick={this.handleClick} className="button col-3" value="3" >3</button>
            <button onClick={this.handleClick} className="button col-3 orange" data-action="add">+</button>
          </div>
          <div className="row">
            <button onClick={this.handleClick} className="button col-6" value="0" >0</button>
            <button className="button col-3" data-action="decimal" onClick={this.handleClick}>.</button>
            <button className="button col-3 orange" data-action="equal" onClick={this.handleClick}>=</button>
          </div>
        </div>
      </div>
    </>
  }
}


export default App;

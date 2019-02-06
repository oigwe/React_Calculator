import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor () {
  super()

  this.state={
    displayValue: '0',
  }
}

newNumDisplay =(e) =>{
  let newNumber = e.target.value.toString();
  let display = this.state.displayValue;
  //numberToDisplay += ;
  this.setState({ displayValue: display += newNumber});
  console.log(this.state.displayValue)
}


  render() {
    return (
<>
        <div id="root">
    <div className="holder">
      <div className="calculator">
      <div  className="col-12 inputview">{this.state.displayValue}</div>
        <div className="row">
          <button className="button col-3">AC</button>
          <button className="button col-3">%</button>
          <button className="button col-3">±</button>
          <button className="button col-3 orange">÷</button>
        </div>
        <div className="row">
          <button onClick={this.newNumDisplay} className="button col-3"value="7" >7</button>
          <button onClick={this.newNumDisplay} className="button col-3"value="8" >8</button> 
          <button onClick={this.newNumDisplay} className="button col-3"value="9" >9</button> 
          <button onClick={this.newNumDisplay} className="button col-3 orange">x</button>
        </div>
        <div className="row">
          <button onClick={this.newNumDisplay} className="button col-3"value="4" >4</button> 
          <button onClick={this.newNumDisplay} className="button col-3"value="5" >5</button> 
          <button onClick={this.newNumDisplay} className="button col-3"value="6" >6</button>
          <button  className="button col-3 orange">-</button>
        </div>
        <div className="row">
          <button onClick={this.newNumDisplay} className="button col-3"value="1" >1</button> 
          <button onClick={this.newNumDisplay} className="button col-3" value="2" >2</button>
        <button onClick={this.newNumDisplay} className="button col-3" value="3" >3</button>
         <button className="button col-3 orange">+</button>
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

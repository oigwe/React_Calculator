import React from 'react';
import './Button.css'
 
const Buttons = (props) => {
    return <>
         <div className="row">
            <button onClick={props.handleClick} className="button col-3" data-action="AC">AC</button>
            <button onClick={props.handleClick} className="button col-3" data-action="percent">%</button>
            <button onClick={props.handleClick} className="button col-3" data-action="negPos">+/-</button>
            <button onClick={props.handleClick} className="button col-3 orange" data-action="divide">/</button>
          </div>

          <div className="row">
            <button onClick={props.handleClick} className="button col-3" value="7">7</button>
            <button onClick={props.handleClick} className="button col-3" value="8">8</button>
            <button onClick={props.handleClick} className="button col-3" value="9">9</button>
            <button onClick={props.handleClick} className="button col-3 orange" data-action="multiply">x</button>
          </div>

          <div className="row">
            <button onClick={props.handleClick} className="button col-3" value="4" >4</button>
            <button onClick={props.handleClick} className="button col-3" value="5" >5</button>
            <button onClick={props.handleClick} className="button col-3" value="6" >6</button>
            <button className="button col-3 orange" data-action="subtract" onClick={props.handleClick}>-</button>
          </div>

          <div className="row">
            <button onClick={props.handleClick} className="button col-3" value="1" >1</button>
            <button onClick={props.handleClick} className="button col-3" value="2" >2</button>
            <button onClick={props.handleClick} className="button col-3" value="3" >3</button>
            <button onClick={props.handleClick} className="button col-3 orange" data-action="add">+</button>
          </div>

        
          <div className="row">
            <button onClick={props.handleClick} className="button col-6" value="0" >0</button>
            <button className="button col-3" data-action="decimal" onClick={props.handleClick}>.</button>
            <button className="button col-3 orange" data-action="equal" onClick={props.handleClick}>=</button>

          </div>
    </>
}


export default Buttons;
import React from 'react';

const handleOperation = (num1, num2, operation) => {
    const one = (num1 || "0");
    const two = (num2 || "0")

    if(operation === "+") {
      return (one + two).toString();
    }
    if(operation === "-"){
      return (one-two).toString()
    }
    if(operation === "*"){
      return (one*two).toString()
    }
    if(operation === "/"){
      if(two === "0"){
        return "0"
      }
      return (one/two).toString()
    }
}

export default handleOperation
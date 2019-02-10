import handleOperation from './operations';

const handleCalculate = (e) => {
    if(e.target.value === "AC"){
        return this.setState = ({
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    })
    }

    if(e.target.value === 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0){
        if(e.target.value === "0" && this.state.previousValue === "0"){
            return {};
        }
        if(this.state.operation){
            if(this.state.displayValue){
                return this.setState=({
                    displayValue: this.state.displayValue + e.target.value
                })
            } return this.setState({displayValue: e.target.value})
        }
        if(this.state.displayValue){
            return this.setState=({
                displayValue: e.target.value, 
            previousValue: null });
        }
    }
    else{
    return this.setState=({
        displayValue: e.target.value, 
        previousValue: null
    });
}
    if(e.target.value === "%"){
        if(this.state.operation && this.state.displayValue){
            const result = handleOperation()
        }
    }
}

export default handleCalculate;
import './App.css';
import React from 'react';
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}  
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }
  handleCelciusChange (temperature) {
    this.setState({scale: 'c', temperature})
  }
  handleFahrenheitChange (temperature) {
    this.setState({scale: 'f', temperature})
  }
  render(){
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return(
      <div>
        <TemperatureInput 
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelciusChange}
          />
        <TemperatureInput 
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
          />
          <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}


export default Calculator;


import React from "react";
// import './App.css';
import './App.css';
import Box from './components/Box';
import './styles/global.css';


const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };

  }
  onHeartChange = (e) => {
    // console.log(e);
    this.setState({ heart: e.target.value }, this.waterCalculater);
  }
  onTempChange = (e) => {
    this.setState({ temperature: e.target.value }, this.waterCalculater);
  }

  onStepChange = (e) => {
    this.setState({ steps: e.target.value }, this.waterCalculater);
  }

  // waterCalculaterFunction

  waterCalculater = () => {
    let waterLevel = 1.5;
    if (this.state.temperature > 20) {
      waterLevel = waterLevel + (this.state.temperature - 20) * 0.02;
    }
    if (this.state.steps > 10000) {
      waterLevel = waterLevel + (this.state.steps - 10000) * 0.00002;
    }
    if (this.state.heart > 120) {
      waterLevel = waterLevel + (this.state.heart - 120) * 0.0008;
    }

    this.setState({ water: waterLevel });

  }

  render() {
    return (
      <div className="container-fluid" >
        <div className="row" >
          {/* <p>Heart: {heartMin}</p>
          <p>Temperature: {tempMin}</p>
          <p>Steps: {stepsMin}</p> */}

          <Box icon="local_drink" color="black" value={this.state.water} unit="L" />
          <Box icon="directions_walk" color="#3A85FF" value={this.state.steps} unit="steps" min={stepsMin} max={stepsMax} onChange={this.onStepChange} />
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm" min={heartMin} max={heartMax} onChange={this.onHeartChange} />
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C" min={tempMin} max={tempMax} onChange={this.onTempChange} />
        </div>
      </div>


    );
  }
}

export default App;



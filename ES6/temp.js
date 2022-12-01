// Only change code below this line
class Thermostat{
    constructor(Fahrenheit){
      this._Fahrenheit = Fahrenheit;
    }
  
  get temperature() {
    return 5/9 * (this._Fahrenheit - 32);
  }
  set temperature (celsius){
    this._Fahrenheit = (celsius*9.0) / 5 + 32;
  }
  // Only change code above this line
  }
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
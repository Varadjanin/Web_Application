  
const {Flight} = require("../entities/flight");

class Airport {
    constructor() {
      this.name = "Nikola Tesla";
      this.listOfFlights = [];
    }
    addFlight(flight) {
      if (!flight || !(flight instanceof Flight)) {
      	throw new Error('Invalid flight data');
      }
      this.listOfFlights.push(flight);
    }
    getPassengersNumber() {
      let count = 0;
      this.listOfFlights.forEach((flight) => {
		  count += flight.listOfPassengers.length;
		  return count;
	  });
    }
    getData() {
      let result = `Airport: ${
        this.name
      }, total passengers: ${this.getPassengersNumber()}
            `;
      this.listOfFlights.forEach((flight) => {
		  result += flight.getData();
		  return count;
	  });
    }
  }

module.exports = {Airport};
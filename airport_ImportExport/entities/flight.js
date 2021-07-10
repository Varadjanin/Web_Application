

class Flight {
    constructor(relation, date) {
      if (!relation || !date) {
      	throw new Error('Fields relation and date are required');
      }
      this.relation = relation;
      this.date = new Date(date);
      this.listOfPassengers = [];
    }
    addPassenger(passenger) {
      if (!passenger || !(passenger instanceof Passenger)) {
      	throw new Error('Invalid passenger data');
      }
      this.listOfPassengers.push(passenger);
    }
    getData() {
      let year = this.date.getFullYear();
      let month = this.date.getMonth() + 1;
      let day = this.date.getDate();
      let result = `  ${day}.${month}.${year}, ${this.relation}
			`;
      this.listOfPassengers.forEach((passenger) => {
        result += `     ${passenger.getData()}
				`;
      });
      return result;
    }
}

module.exports = {Flight};
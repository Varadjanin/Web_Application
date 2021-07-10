const {Person} = require('../entities/person');
const {Seat} = require('../entities/seat');


class Passenger {
    constructor(person, seat) {
      if (!person ||  !(person instanceof Person)) {
      	throw new Error('Invalid person input');
      }
      if (!seat ||  !(seat instanceof Seat)) {
      	throw new Error('Invalid seat input');
      }
      this.person = person;
      this.seat = seat;
    }
    getData() {
      return `${this.seat.getData()} ${this.person.getData()}`;
    }
}

module.exports = {Passenger};
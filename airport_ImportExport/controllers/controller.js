const {Person} = require('../entities/person');
const {Seat} = require('../entities/seat');
const {Passenger} = require('../entities/passenger');
const {Flight} = require("../entities/flight");
const {Airport} = require('../entities/airport');


const createFlight = (relation, date) => new Flight(relation, date);

const createPassenger = (firstName, lastName, seatNumber, category) => {
    let person = new Person(firstName, lastName);
    let seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
};

module.exports = {createFlight, createPassenger};
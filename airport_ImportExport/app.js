const {Person} = require('../airport_ImportExport/entities/person');
const {Seat} = require('../airport_ImportExport/entities/seat');
const {Passenger} = require('../airport_ImportExport/entities/passenger');
const {Flight} = require("../airport_ImportExport/entities/flight");
const {Airport} = require('../airport_ImportExport/entities/airport');
const {createFlight} = require('../airport_ImportExport/controllers/controller');
const {createPassenger} = require('../airport_ImportExport/controllers/controller');


(function() {
  
  try {
    const osoba = new Person("Marina", "Varadjanin");
    const sediste = new Seat(11, "e");
    const putnik = new Passenger(osoba, sediste);
    const let1 = new Flight("Lisboa", "12/15/2021");
    const aerodrom = new Airport();

    createFlight("Lisboa", "15/12/2021");
    createPassenger("Marina", "Varadjanin", 11, "e");
    aerodrom.addFlight(let1);
    let1.addPassenger(putnik);
    console.log(putnik);
    console.log(let1);
    console.log(aerodrom);
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
})();



// const { print } = require('../module1')

// const doSomething = (data) => {
// 	print(data)
// 	console.log("doing something with " + data);
// }

// module.exports.doSomething = doSomething;

// const print = (message) => log(message, new Date())

// const log = (message, timestamp) =>
//    console.log(`${timestamp.toString()}: ${message}`)

// module.exports = { print, log }
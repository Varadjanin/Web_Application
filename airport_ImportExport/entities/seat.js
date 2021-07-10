

class Seat {
    constructor(number = Math.floor(91 * Math.random() + 10), category = "e") {
      if ( !['e','b'].includes(category) ) {
      	throw new Error('Invalid category input');
      }
      this.number = number;
      this.category = category;
    }
    getData() {
      return `${this.number} ${this.category.toUpperCase()}`;
    }
}

module.exports = {Seat};
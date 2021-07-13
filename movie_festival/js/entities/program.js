
const {Movie} = require("./movie");

class Program{
    constructor(date) {
        if (!date) {
            throw new Error('Field Date is required');
        }
    
        let today = new Date(date);
        let dd = today.getDate();
        let mm = today.getMonth()+1; 
        let yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        today = dd+'-'+mm+'-'+yyyy;
    
        this.date = today;
        this.listOfMovies = [];
    };
    numberOfMoviesInProgram() {
        let count = 0;
        this.listOfMovies.forEach(() => count++);
        return count;
    };
    addMovie(movie) {
        if (!movie || !(movie instanceof Movie)) {
            throw new Error('Invalid movie data');
        };
        this.listOfMovies.push(movie);
        return "Movie added.";
    };
    getTotalLengthOfAllMoviesInTheProgram() {
        let sum = 0;
        this.listOfMovies.forEach((movie) => sum += movie.length);
        return `${sum}min`;
    };
    getData() {
        let result = `${this.date}, ${this.listOfMovies.length} movies, duration: ${this.getTotalLengthOfAllMoviesInTheProgram()}`;
        return result;
    };
};


module.exports = {Program};


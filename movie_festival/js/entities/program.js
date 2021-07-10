


class Program{
    constructor(date) {
        if (!date) {
            throw new Error('Field Date is required');
        }
    
        var today = new Date(date);
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
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
        var count = 0;
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
        var sum = 0;
        this.listOfMovies.forEach((movie) => sum += movie.length);
        return `${sum}min`;
    };
    getData() {
        var result = `${this.date}, ${this.listOfMovies.length} movies, duration: ${this.getTotalLengthOfAllMoviesInTheProgram()}`;
        return result;
    };
};

export default Program;
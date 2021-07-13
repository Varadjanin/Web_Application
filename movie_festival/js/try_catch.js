const { Movie } = require("./entities/movie.js");
const { Program } = require("./entities/program.js");
// const { Festival } = require("./entities/festival.js");


(function() {
  
  try {
    let movie1 = new Movie("j", 222, "drama");
    let movie2 = new Movie("k", 111, "drama")
    let movie3 = new Movie("h", 33, "drama");
    let program1 = new Program("11/11/2021");
    let program2 = new Program("12/15/2021");

    program1.addMovie(movie1);
    program2.addMovie(movie2);
    program1.addMovie(movie3);

    console.log(movie1);
    console.log(program1);
    console.log(program1.getData());
    
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
})();




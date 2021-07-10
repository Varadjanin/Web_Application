

class Festival{
    constructor() {
        this.allMovies = [];
        this.allPrograms = [];
    };
};

export default Festival;



// this.totalNumberOfMoviesInFestival = function() {
//     var count = 0;
//     this.listOfPrograms.forEach(function(program) {
//         count += program.numberOfMoviesInProgram();
//     })
//     return count;
// }

// this.addProgram = function (program) {
//     if (!program || !(program instanceof Program)) {
//         throw new Error('Invalid program data');
//     }
//     if(program.listOfMovies.length > (maxNumberOfMovies-this.totalNumberOfMoviesInFestival()))  {
//         throw new Error("Too many movies in the festival.");
//     }
//     this.listOfPrograms.push(program);
//     return "Program added."
// }
// this.getData = function () {
//     if(this.listOfPrograms.length!=0) {
//         var title = this.name + " festival has " + this.totalNumberOfMoviesInFestival() + ' movie titles' + "\n";
                        
//         var content;
//         this.listOfPrograms.forEach(function(program) {
//             content = "\t" + program.getData() + '\n';
//         });

//         return title + content;

//     } else {               
//         return this.name + " festival" + "\n" + '\t\t' + "Program is yet to be announced";
//     }
// }
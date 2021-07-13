
import createMovie from "../js/functions/create_movie.js"
import createProgram from "../js/functions/create_program.js"
import addMovieToTheProgram from "../js/functions/addMovieToTheProgram.js"
import {createMovieBtn, createProgramBtn, addMovieToProgramBtn} from "../js/functions/variables.js";

//setting date:
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
today = yyyy+'-'+mm+'-'+dd;
document.querySelector(".program_date").setAttribute("min", today);

//adding eventListeners:

createMovieBtn.addEventListener("click", createMovie);
createProgramBtn.addEventListener("click", createProgram);
addMovieToProgramBtn.addEventListener("click", addMovieToTheProgram); 


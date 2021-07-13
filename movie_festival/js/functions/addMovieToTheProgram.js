
import {festival, dropdownMovies, dropdownPrograms } from "../functions/variables.js";



export default function addMovieToTheProgram() {
    
    let programListElements = document.querySelectorAll(".program_list li");
    let programSelectOptions = document.querySelectorAll(".dropdown_programs option");

    let movieValue = parseInt(dropdownMovies.value);
    let programValue = parseInt(dropdownPrograms.value);

    // console.log(movieValue); //broji sve napravljene filmove
    // console.log(programValue);//broji sve napravljene programe

    let movie = festival.allMovies[movieValue-1];
    let program = festival.allPrograms[programValue-1];
    program.listOfMovies.push(movie);

    // console.log(movie);
    // console.log(program);

    programListElements[programValue-1].innerHTML = program.getData();
    programSelectOptions[programValue].innerHTML = program.getData();

};
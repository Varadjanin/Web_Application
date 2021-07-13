import Festival from "../entities/festival.js";

//creating festival:
const festival = new Festival();

//selecting elements:

let movieTitle = document.querySelector(".movie_title");
let movieLength = document.querySelector(".movie_length");
let movieGenre = document.querySelector(".movie_genre");
let movieList = document.querySelector(".movie_list");
let dropdownMovies = document.querySelector(".dropdown_movies");


let programDate = document.querySelector(".program_date");
let programList = document.querySelector(".program_list");
let dropdownPrograms = document.querySelector(".dropdown_programs");

//_____________________________________________________


let createMovieBtn = document.querySelector(".movie_create_button");
let createProgramBtn = document.querySelector(".program_create_button");
let addMovieToProgramBtn = document.querySelector(".add_movie_to_program_button");

export {festival, movieTitle, movieLength, movieGenre, movieList, dropdownMovies, programDate, programList, dropdownPrograms, createMovieBtn, createProgramBtn, addMovieToProgramBtn}
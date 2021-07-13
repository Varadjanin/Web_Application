import Movie from "../entities/movie.js";
import {festival, movieTitle, movieLength, movieGenre, movieList, dropdownMovies} from "../functions/variables.js";


function createMovie() {
    
    let newMovie = new Movie(movieTitle.value, parseInt(movieLength.value), movieGenre.value);
    let index = festival.allMovies.push(newMovie);
    
    let newLi = document.createElement("li");
    newLi.innerHTML = newMovie.getData();
    movieList.appendChild(newLi);
    
    
    //adding movie to the dropdown list:
    let movieOption = document.createElement("option");

    movieOption.innerHTML = newMovie.title;
    movieOption.setAttribute("value", index);
    dropdownMovies.appendChild(movieOption);


    //clearing the fields for new inputs:
    movieTitle.value = "";
    movieLength.value = "";
    movieGenre.value = "";
    
};

export default createMovie;
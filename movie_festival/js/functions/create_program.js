
import Program from "../entities/program.js";
import {festival, programDate, programList, dropdownPrograms} from "../functions/variables.js";


export default function createProgram() {
    
    let newProgram = new Program(programDate.value);
    let index = festival.allPrograms.push(newProgram);

    
    let newLi = document.createElement("li");
    newLi.innerHTML = newProgram.getData();
    // newLi.classList.add('added');
    programList.appendChild(newLi);
    
    //adding program to the dropdown list:
    let option = document.createElement('option');
    option.setAttribute('value', index);
    option.innerHTML = newProgram.getData();
    dropdownPrograms.appendChild(option);
    
    
    //clearing the fields for new inputs:
    programDate.value = "";
}
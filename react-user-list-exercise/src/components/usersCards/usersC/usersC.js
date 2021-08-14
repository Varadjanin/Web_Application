import React from 'react';
import  {data}  from "../../usersData/randomUsers";
//import {RandomUsers} from "../UsersData/RandomUsers"
//import {data} from "../UsersData/RandomUsers";
import { User } from './userC';
import '../usersC/usersC.css';

const UsersC = () => {
    return (
        <div className='UsersC__cards disapear'>
            {data.results.map(person => 
            <User
                key={person.login.uuid}
                img={person.picture.thumbnail}
                name={person.name.first}
                email={person.email}
                dob={person.dob.date} />)}
        </div>
    )
}

export { UsersC }
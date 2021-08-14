import React from 'react';
import  {data}  from "../../usersData/randomUsers";
//import {RandomUsers} from "../UsersData/RandomUsers"
//import {data} from "../UsersData/RandomUsers";
import { User } from '../usersG/userG';
import '../usersG/usersG.css';

const UsersG = () => {
    return (
        <ul className='Users__list'>
            {data.results.map(person => <User
                key={person.login.uuid}
                img={person.picture.thumbnail}
                name={person.name.first}
                email={person.email}
                dob={person.dob.date} />)}
        </ul>
    )
}

export { UsersG }
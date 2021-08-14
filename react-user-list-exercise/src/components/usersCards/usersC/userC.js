  
import React from 'react';
import '../usersC/userC.css';

const User = (props) => {
    return (

        <div className='UserC__wrapper'>
            <div>
                <img className='UserC__img' src={props.img} alt='Users'></img>
                <p className="userCname">{props.name}</p>
            </div>
            <div className='UserC__info'>
                <p>Email:{props.email}</p>
                <p>DOB:{props.dob}</p>
            </div>
        </div>

    )
}


export { User };
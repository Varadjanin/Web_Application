import React from 'react';
import '../usersCards/usersCards.css';

const UsersCards = (props) => {
    return (
        <div className='UserCards__wrapper'>
            <div>
                <img className='UserCards__img' src={props.img} alt='Users'></img>
                <p>Name:{props.name}</p>
            </div>
            <div className='UserCards__info'>
                <p>Email:{props.email}</p>
                <p>DOB:{props.dob}</p>
            </div>
        </div>
    )
}


export { UsersCards };
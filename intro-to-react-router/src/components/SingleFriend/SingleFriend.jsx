import React from 'react';
import { Link } from 'react-router-dom';
import './SingleFriend.css'

const SingleFriend = ({friend}) => {
    // console.log(friend);
    const {id, name, username, email, address, phone} = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Email:  {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default SingleFriend;
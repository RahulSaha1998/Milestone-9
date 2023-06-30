import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phones from './Phones';

const SinglePhone = () => {
    const singlePhone = useLoaderData(); 
    return (
        <div>
            <h2>{singlePhone.name}</h2>
            <img src={singlePhone.image} alt="" />
        </div>
    );
};

export default SinglePhone;
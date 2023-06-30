import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = ({ post }) => {
    const { id, body, title } = post;

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h5>Id: {id}</h5>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>Details</Link>
            <Link to={`/post/${id}`}><button className='btn'>Show Post Details</button></Link>
            <button onClick={handleNavigation} className='btn'>With Button Handler</button>
        </div>
    );
};

export default SinglePost;
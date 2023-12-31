import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);

    return (
        <div>
            <h3>All posts are here: {posts.length}</h3>
            <div>
                {
                  posts.map(post => <SinglePost
                  key={post.id}
                  post={post}
                  ></SinglePost>)  
                }
            </div>
        </div>
    );
};

export default Posts;
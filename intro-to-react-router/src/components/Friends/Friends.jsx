import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFriend from '../SingleFriend/SingleFriend';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends);

    return (
        <div>
            <h2>This are my friends: {friends.length}</h2>
            <div>
                {
                    friends.map(friend => <SingleFriend
                        key={friend.id}
                        friend={friend}
                    ></SingleFriend>)
                }
            </div>
        </div>
    );
};

export default Friends;
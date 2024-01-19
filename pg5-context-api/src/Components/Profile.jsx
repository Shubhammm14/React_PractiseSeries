import React, { useContext } from 'react';
import userContext from '../Context/UserContext';

const Profile = () => {
    const { user } = useContext(userContext);

    if (user) {
        return (
            <div>
                <h1>Welcome {user.username}</h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Please login</h1>
            </div>
        );
    }
};

export default Profile;

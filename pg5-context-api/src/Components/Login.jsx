import React, { useState, useContext } from 'react';
import userContext from '../Context/UserContext';

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Assuming setUser is a function that handles authentication
        setUser({ username, password });
    };

    return (
        <div className='flex flex-col justify-center justify-center'>
            <h2 className='text-center text-2xl'>Login</h2>

            <form className='flex flex-col m-3 text-xl p-3'onSubmit={handleSubmit}>
                <input
                  className='m-1 p-2'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    type='text'
                    placeholder='Username'
                />

                <input
                  className='m-1 p-2'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />

                <button className='bg-orange-300 m-2' type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;

import React, { useEffect, useState } from 'react';

const Index = () => {
    const [input, setInput] = useState('');
    const [userName, setUserName] = useState('Shubhammm14');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://api.github.com/users/${userName}`);
            const userData = await res.json();
            setData(userData);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [userName]);

    if (loading) {
        return <div className='m-10 text-center'>Please wait, data is on the way...</div>;
    }

    if (error) {
        return <div className='m-10 text-center'>Error: {error.message}</div>;
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='m-10 flex justify-center w-[100vw]'>
                <input
                    type='text'
                    className='bg-gray-300 p-2 text-lg rounded-full'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className='bg-orange-400 p-1 px-5 mx-5 rounded-md'
                    onClick={() => setUserName(input)}
                >
                    Submit
                </button>
            </div>
            {data && (
                <div className='m-10'>
                    <h1 className='text-2xl font-bold'>User Information:</h1>
                    <div className='flex items-center space-x-4 mt-4'>
                        <img src={data.avatar_url} alt='User Avatar' className='h-20 w-20 rounded-full' />
                        <div>
                            <p className='text-xl font-semibold'>{data.name}</p>
                            <p className='text-lg text-gray-600'>{data.bio}</p>
                            <p className='text-lg text-gray-600'>Followers: {data.followers}</p>
                            <p className='text-lg text-gray-600'>Following: {data.following}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Index;

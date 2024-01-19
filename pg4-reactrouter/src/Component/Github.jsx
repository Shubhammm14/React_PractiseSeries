import React, { useEffect, useState } from 'react';

const Github = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/Shubhammm14')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.error('Error fetching GitHub data:', error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); // empty dependency array to run the effect only once

    if (loading) {
        return <div className='h-700vh text-center text-3xl bg-orange-100'>Loading...</div>;
    }

    if (error) {
        return <div className='h-700vh text-center text-3xl bg-red-100'>Error fetching data</div>;
    }

    return (
        <div className='h-700vh text-center text-3xl bg-orange-100'>
            <div>
                Github followers: {data && data.followers}
            </div>
            <div className='p-20 flex m-10 flex-center'>
                <img className='w-[20%]' src={data.avatar_url} alt="Githubpic" />
                <p className='m-10'>Github picture profile</p>
            </div>
        </div>
    );
};

export default Github;

import React, { useEffect, useState } from 'react';

const Index = () => {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const fetchData = async () => {
        const res = await fetch(`https://dummyjson.com/users/`);
        const dat = await res.json();
        setData(dat.users.map((user) => user.firstName));
    };

    const filterData = () => {
        setFilteredData(data.filter((userData) => input.length>1&&userData.toLowerCase().includes(input.toLowerCase())));
    };

    useEffect(() => {
        filterData();
    }, [input, data]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='flex flex-col items-center'>
            <div className='m-5 w-full flex justify-center'>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='enter the search'
                    className='rounded-full p-3 mx-4 w-[20vw] bg-gray-300'
                />
                <button onClick={filterData} className='bg-gray-400 rounded-lg px-10'>
                    Search
                </button>
            </div>
            <div className='text-xl '>
                {filteredData.map((item, index) => (
                    <div className='bg-gray-400 w-70 m-2 px-20 rounded-full p-2' key={index}>{item}</div>
                ))}
            </div>
        </div>
    );
};

export default Index;

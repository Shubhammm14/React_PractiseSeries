import React, { useState, useEffect } from 'react';

const Index = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScrollPercentage = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percentage = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(percentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);
        return () => {
            window.removeEventListener('scroll', handleScrollPercentage);
        };
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/products`);
            const data = await res.json();
            console.log("Fetched data:", data); // Log the fetched data
            setData(data.products);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading....</div>;
    }

    if (error) {
        return <div>{error.toString()}</div>;
    }
    
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='fixed top-0 left-0 right-0 bg-gray-200'>
                <h1 className='text-xl p-5'>Product List</h1>
                <div className='bg-black h-2' style={{ width: `${scrollPercentage}%` }}></div>
            </div>
            <ul>
                {data.map((product, index) => (
                    <div key={index}>
                        <img src={product.images} alt={product.title} />
                        <li>{product.title}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Index;

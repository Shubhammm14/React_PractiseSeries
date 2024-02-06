import React, { useState, useEffect } from 'react';

const Fedex = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [count, setCount] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
            const data = await res.json();
            console.log(data);
            setImages(data.products);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, [count]); // Fetch data whenever the count state changes

    if (loading)
        return <div>Loading...</div>;

    if (error)
        return <div>Something went wrong: {error.message}</div>;

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <div className='justify-center h-[90vh] '>
                    {images && images.length > 0 ?
                        <div className='flex flex-row '>
                            {images.map((imag, index) => (
                                <div key={imag.id}>
                                    <img className='h-[10vh] w-[10vw]' src={imag.thumbnail} />
                                </div>
                            ))}
                        </div>
                        : null}

                </div>
                {count < 3 ? (
                    <button className='bg-red-900 rounded-lg' onClick={() => { setCount(count + 1) }}>get more</button>
                ) : (
                    <div>no more content</div>
                )}
            </div>
        </div>
    );
};

export default Fedex;

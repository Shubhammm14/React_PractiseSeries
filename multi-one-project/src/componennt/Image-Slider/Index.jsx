import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Index = ({ url, limit }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    function handlePrev() {
        setCurrentSlide((currentSlide - 1 + limit) % limit);
    }

    function handleNext() {
        setCurrentSlide((currentSlide + 1) % limit);
    }

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const res = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await res.json();
            if (data) {
                setImages(data);
                setLoading(false);
            } else {
                setLoading(false);
            }
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') fetchImages(url);
    }, [url]);

    if (loading) {
        return <div>Loading, please wait...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='flex justify-center h-[50vh] items-center'>
            <div className='flex flex-row  items-center'>
                <FaArrowLeft onClick={handlePrev} className=" cursor-pointer" />
                <div className='flex flex-col px-10 '>
                    <div className='flex flex-row '>
                        {images && images.length > 0 ? (
                            images.map((image, index) => {
                                if (index === currentSlide)
                                    return (
                                        <img
                                            key={index}
                                            id={image.id}
                                            alt=''
                                            src={image.download_url}
                                            className='h-[30vh] w-[30vh] rounded-lg'
                                        />
                                    );
                            })
                        ) : (
                            ''
                        )}
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                        {images && images.length > 0 ? 
                            images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full mx-1 ${currentSlide === index ? 'bg-red-500' : 'bg-gray-500'}`}
                                ></button>
                            )) 
                            : null}
                    </div>
                </div>
                <FaArrowRight onClick={handleNext} className=" cursor-pointer" />
            </div>
        </div>
    );
};

export default Index;

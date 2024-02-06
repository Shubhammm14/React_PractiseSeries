import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Index = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex) {
        setRating(currentIndex + 1);
    }

    function handleMouseLeave() {
        setHover(0);
    }

    function handleMouseMove(currentIndex) {
        console.log(currentIndex)
        setHover(currentIndex + 1);
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-row'>
                {[...Array(noOfStars)].map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            className={index < (hover || rating) ? 'text-yellow-400' : ''}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseMove(index)}
                            onMouseLeave={handleMouseLeave} // Corrected this line
                            size={60}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Index;

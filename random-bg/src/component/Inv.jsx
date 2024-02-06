import React, { useState } from 'react';

const Inv = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    const generateHex = () => {
        let hex = '#';
        const he = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 0; i < 6; i++) {
            hex += he[Math.floor(Math.random() * he.length)];
        }
        setColor(hex);
        setTypeOfColor('hex');
    };

    const generateRgb = () => {
        const r=Math.floor(Math.random()*256)
        const g=Math.floor(Math.random()*256)
        const b=Math.floor(Math.random()*256)
        setColor(`rgb(${r},${g},${b})`)
        setTypeOfColor('')
    };

    return (
        <div className='flex justify-center items-center w-screen h-screen 'style={{ backgroundColor: color }}>
            <div >
                <button onClick={generateHex} className='bg-orange-500 rounded-lg p-5 m-10'>
                    Generate Hex Color
                </button>
                <button onClick={generateRgb} className='bg-yellow-600 rounded-lg p-5 m-10'>
                    Generate Rgb Color
                </button>
                <div className='text-white text-3xl text-center'> {typeOfColor} {color}</div>
            </div>
        </div>
    );
};

export default Inv;

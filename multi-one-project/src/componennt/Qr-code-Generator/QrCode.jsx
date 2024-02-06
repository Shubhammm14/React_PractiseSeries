import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import CustomHook from './CustomHook';

const QrCode = () => {
    const [input, setInput] = useState('');
    const [qrData, setQrData] = useState('');
    const [theme,setTheme]=CustomHook('theme','red')
    const changetheme=()=>{
       theme==='red'?setTheme('yellow'):setTheme('red')
    }
    const handleInput = () => {
        setQrData(input);
    };

    return (
        <div className='flex'>
            <div className='w-[50vw] h-[100vh] items-center justify-center  flex flex-col' style={{backgroundColor:theme}}>
                <div className='text-5xl'>
                    Qr-Generator
                </div>
                <div className='m-5'>
                    <input className='m-4 rounded-lg p-2' onChange={(e) => setInput(e.target.value)} placeholder='Enter Here' />
                    <button
                        disabled={input.trim().length < 1}
                        onClick={handleInput}
                        className={`bg-white text-red-900 px-4 py-2 rounded-md ${input.trim().length < 1 && 'opacity-50 cursor-not-allowed'}`}
                    >
                        Generate
                    </button>
                </div>
                <button onClick={changetheme} className='bg-white rounded-lg p-2'>
                    Click to change theme
                </button>
            </div>
            <div className='flex items-center justify-center w-[50vw]'>
                {qrData && (
                    <QRCode
                        id='qr-value'
                        value={qrData}
                        size={300}
                    />
                )}
            </div>
        </div>
    );
};

export default QrCode;

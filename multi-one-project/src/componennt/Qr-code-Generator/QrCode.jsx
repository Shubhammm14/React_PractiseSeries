import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QrCode = () => {
    const [input, setInput] = useState('');
    const [qrData, setQrData] = useState('');

    const handleInput = () => {
        setQrData(input);
    };

    return (
        <div className='flex'>
            <div className='w-[50vw] h-[100vh] items-center justify-center bg-red-700 flex flex-col'>
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

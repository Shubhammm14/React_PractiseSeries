import React from 'react';
import '../Modal-Popup/Style.css'
const Modal = ({ header, body, footer }) => {
  return (
    <div className='flex items-center'>
      <div></div>
      <div className=''>
        <div className='w-[70vw] h-[70vh] bg-green-800'>
          <div className='h-[30%] w-[100%] text-5xl text-bold p-10'>
            {header ? header : 'customised-header'}
          </div>
          <div className='h-[50%] w-[100%] text-lg bg-green-300 p-10 overflow-hidden overflow-y-auto scrollbar'>
            {body ? body : 'customised body'}
          </div>
          <div className='h-[20%] w-[100%] text-2xl p-10 '>
            {footer ? footer : 'cutomised footer'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

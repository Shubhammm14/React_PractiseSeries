import React from 'react';

const Card = ({ colorname, onClick }) => {
  return (
    <div className='px-[2%] h-10 w-[20%] cursor-pointer text-center m-5 rounded-full text-olive' style={{ backgroundColor: colorname }} onClick={onClick}>
      <h1 className=''>{colorname}</h1>
    </div>
  );
};

export default Card;

import React,{useCallback}from 'react';

const Card = ({password,passwordRef}) => {
    const copyPasswordToClipboard=useCallback(
      () => {
        passwordRef.current?.select()
        //passwordRef.current?.setSelectionRange(0,2)
        window.navigator.clipboard.writeText(password)
      },
      [password],
    )
    
  return (
    <div className='w-full  rounded-full'>
      <div className=' shadow rounded-full overflow-hidden items-center'>
        <input type='text' placeholder='password...' className='w-[50%]  outline-none bg-white py-3 px-2 m-4 hover:bg-yellow-100' value={password} readOnly ref={passwordRef}/>
        <button className='outline-none border border-solid-white bg-blue-900 text-white px-7 py-1 text-2xl hover:bg-blue-700'  onClick={copyPasswordToClipboard}>copy</button>
      </div>
    </div>
  );
};

export default Card;

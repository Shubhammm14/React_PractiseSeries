import React, { useEffect,useState, useCallback,useRef } from 'react';
import './App.css';
import Card from './Component/Card';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowance, setNumberAllowance] = useState(false);
  const [charAllowance, setCharAllowance] = useState(false);
  const [password, setPassword] = useState('');


  //use ref hook
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowance) str += '0123456789';
    if (charAllowance) str += '!@#$%^&*()_+}{[]~';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowance, charAllowance, setPassword]);


  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowance,charAllowance,passwordGenerator])
  
  return (
    <div className='h-full w-full text-center bg-blue-900'>
      <div><h1 className='text-4xl py-10 text-white'>Text-Generator</h1></div>
      <div className='flex flex-col items-center justify-center'>
        <Card password={password} passwordRef={passwordRef}/>
        <div className='flex gap-x-7'>
          <div className='text-white text-xl '>
            <input
              type='range'
              min={8}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}>
            </input>
            <label className='px-2'>length: {length}</label>
          </div>
          <div>
          <input
            type='checkbox'
            defaultChecked={numberAllowance}
            id="numberInput"
            className='cursor-pointer'
            onChange={(e) => {
              setNumberAllowance((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" className='text-white px-3 text-xl'>
            Numbers
          </label>
          </div>
          <div>
          <input
            type='checkbox'
            defaultChecked={charAllowance}
            id="charachter Input"
            className='cursor-pointer'
            onChange={(e) => {
              setCharAllowance((prev) => !prev);
            }}
          />
          <label htmlFor="character Input" className='text-white px-3 text-xl'>
            Characters
          </label>
          </div>
        </div>
      </div>

      <button className='border border-solid-black m-5 px-2 h-10 rounded bg-blue-900 text-white' onClick={passwordGenerator}>Generate Password</button>
      
    </div>
  );
}

export default App;

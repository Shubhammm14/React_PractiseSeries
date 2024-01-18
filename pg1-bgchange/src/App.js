import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  const [color, setColor] = useState("purple");

  return (
    <div className='h-full w-full h-screen' style={{ backgroundColor: color }}>
      <div className='flex flex-row items-center justify-center px-20 bg-blue-100 bottom-10'>
        <Card colorname='red' onClick={() => setColor("red")} />
        <Card colorname='yellow'onClick={() => setColor("yellow")} />
        <Card colorname="blue" onClick={() => setColor("blue")}/>
        <Card colorname="grey" onClick={() => setColor("grey")}/>
        <Card colorname="Orange" onClick={() => setColor("orange")}/>
        <Card colorname="pink" onClick={() => setColor("pink")}/>
        <Card colorname="purple" onClick={() => setColor("purple")}/>
        <Card colorname="violet" onClick={() => setColor("violet")} />
      </div>
    </div>
  );
}

export default App;


import { useState } from 'react';
import './App.css';




function App() {
  let [counter,setCounter]=useState(100)
  //let counter=100
  const removeVal=()=>{
    setCounter(counter--)
  }
  const addValue=()=>{
    console.log("value added")
    //counter++;
    setCounter(counter+1)
    // setCounter((prevCounter)=>prevCounter+1)16
    // setCounter((prevCounter)=>prevCounter+1)17
    // setCounter((prevCounter)=>prevCounter+1)18
    // setCounter((prevCounter)=>prevCounter+1)19
    // setCounter((prevCounter)=>prevCounter+1)20

  }

  return (
  <>
  <h1>codeGo</h1>
  <h1>Counter value: {counter}</h1>
  <button onClick={addValue}>Add Value</button>
  <br/>
  <button onClick={removeVal}>remove value</button>
  </>
  );
}

export default App;


import './App.css';
import Card from './Components/Card';

function App() {
  return (
<div className=' items-center flex flex-col '>
<h1 className='px-10 py-5'> Card Play</h1>

<Card className='py-5' username="shubham"/>
<Card username="varun"/>
<Card username="Taui"/>
<Card username="sujal"/>

</div>
  );
}

export default App;

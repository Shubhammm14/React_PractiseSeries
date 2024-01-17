import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

function myApp(){
return(<div>
  <h1>shubham</h1>
</div>)
}
// const reactElement={
//   type:'a',
//   props:{
//       herf:'https://google.com',
//       target:'blank'
//   },
//   children:'click me to visit google'
// }
// const anotherElement=(
//   <a herf="https://google.com" target='_blank'>visit google</a>
// )
const reactElement=React.createElement(
  'a',
  {herf:'https://google.com' ,target:'_blank'},
  'click me to visit google' 
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     // reactElement
    //myApp()
    //reactElement err
    //anotherElement
    <App/>
    

);



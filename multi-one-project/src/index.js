import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fedex from './componennt/Load-more-Data/Fedex'; // Correct casing and extension
import QrCode from './componennt/Qr-code-Generator/QrCode';
import Index from './componennt/Search-autocomplete/Index';
import { TabsParent } from './componennt/Tab-Render/TabsParent';
import ModalRender from './componennt/Modal-Popup/ModalRender';
import GameBoard from './componennt/Tik-Tak-Toe/GameBoard';
import Test from './componennt/WindowResiZe/Test';
import OnClickOutsideTest from './componennt/onClickOutsideHook/Test';
import Section from './componennt/Scroll-to/SCroll-section';
ReactDOM.render(
  <React.StrictMode>
    {/* <Index/> */}
    {/* <Fedex /> */}
    {/* <QrCode/> */}
    {/* <Index/> */}
    {/* <TabsParent/> */}
    {/* <ModalRender/> */}
    {/* <Index/> */}
    {/* <GameBoard/> */}
    {/* <OnClickOutsideTest/> */}
    {/* <Test/> */}
    <Section/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

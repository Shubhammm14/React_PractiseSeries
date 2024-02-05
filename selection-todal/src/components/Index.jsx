import React, { useState } from 'react';
import { data } from './Data';

const Index = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [multiSelectorEnabled, setMultiSelectorEnabled] = useState(true);
 const[multiSelectedItem,setMultiSelectionItem]=useState([])
  const handleClick = (dataItem) => {
    setSelectedItem(dataItem);
  };

  const handleCheckboxChange = () => {
    setMultiSelectorEnabled(!multiSelectorEnabled);
  };
  const handleMultiSelection = (dataItem) => {
    let cpyArr = [...multiSelectedItem];
    const indexOfCurrentId = cpyArr.indexOf(dataItem.id);
  
    if (indexOfCurrentId === -1) {
      cpyArr.push(dataItem.id);
    } else {
      cpyArr.splice(indexOfCurrentId, 1);
    }
  
    setMultiSelectionItem(cpyArr);
  };
  
  return (
    <div className='justify-center items-center'>
      <div className='text-xl w-[50vw] m-10 center'>
        <label>
          <input
            type='checkbox'
            checked={multiSelectorEnabled}
            onChange={handleCheckboxChange}
          />
          Enable multiSelector
        </label>

        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              onClick={multiSelectorEnabled?()=>handleMultiSelection(dataItem):() => handleClick(dataItem)}
              className='flex bg-green-900 flex-col p-10 m-10 text-white'
            >
              <div className='justify-between flex flex-row'>
                <h1>{dataItem.question}</h1>
                <span>+</span>
              </div>
              {multiSelectorEnabled&& multiSelectedItem.indexOf(dataItem.id)!==-1|| selectedItem && dataItem.id === selectedItem.id ? (
                <div>{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>
            <h1>data not found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;

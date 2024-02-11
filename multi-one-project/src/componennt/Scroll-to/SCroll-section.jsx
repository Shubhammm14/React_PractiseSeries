import React, { useRef } from 'react';

const Section = () => {
  const data = [
    {
      id: 1,
      label: 'first-card',
      style: {
        width: '100%',
        height: '700px',
        background: 'red'
      }
    },
    {
      id: 2,
      label: 'second-card',
      style: {
        width: '100%',
        height: '1500px',
        background: 'yellow'
      }
    },
    {
      id: 3,
      label: 'third-card',
      style: {
        width: '100%',
        height: '900px',
        background: 'pink'
      }
    },
    {
      id: 4,
      label: 'fourth-card',
      style: {
        width: '100%',
        height: '1200px',
        background: 'orange'
      }
    },
    {
      id: 5,
      label: 'fifth-card',
      style: {
        width: '100%',
        height: '500px',
        background: 'violet'
      }
    }
  ];

  const ref = useRef(null);

  const scroll = () => {
    const pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: 'smooth', // Fix: Wrap 'smooth' in quotes
    });
  };

  return (
    <div>
      <h1>scroll-to-3</h1>
      <button onClick={scroll}>scroll</button>
      {data.map((dataItem,index) => (
        <div key={dataItem.id} className='flex justify-center' style={dataItem.style} ref={index===2?ref:null}>
          <h1 className='bg-gray-300 p-3 rounded-lg h-10 m-2'>{dataItem.label}</h1>
        </div>
      ))}
    </div>
  );
};

export default Section;

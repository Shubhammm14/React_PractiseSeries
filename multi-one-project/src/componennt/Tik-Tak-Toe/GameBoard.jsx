import React, { useEffect, useState } from 'react';

const Square = ({row,handleClick,squares}) => {
    
    return (
        <div className='  flex flex-row h-full '>
            <div className='h-20 border m-1 border-white bg-gray-300 w-20 flex justify-center items-center text-3xl' onClick={()=>{handleClick(3*row+0)}}>{squares[3*row+0]}</div>
            <div className='h-20 border m-1 border-white bg-gray-300 w-20 flex justify-center items-center text-3xl'onClick={()=>{handleClick(3*row+1)}}>{squares[3*row+1]}</div>
            <div className='h-20 border m-1 border-white bg-gray-300 w-20 flex justify-center items-center text-3xl' onClick={()=>{handleClick(3*row+2)}}>{squares[3*row+2]}</div>
        </div>
    );
};


const GameBoard = () => {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXturn, setIsXturn] = useState(true);
    const winingpattern=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    const [winner,setWinner]=useState(null)
    useEffect(()=>{
      for(let i=0;i<winingpattern.length;i++){
        const [x,y,z]=winingpattern[i]
        if(squares[x]&&squares[y]&&squares[z]&&squares[x]===squares[y]&&squares[y]==squares[z]){
            console.log('heyy')
        {isXturn?setWinner('O'):setWinner('X')}
        break;    
    }
      }
    },[squares])
    const handleClick = (index) => {
        
        if (squares[index] === ''&& winner===null) {
            setSquares(prevSquares => {
                const newSquares = [...prevSquares];
                newSquares[index] = isXturn ? 'X' : 'O';
                return newSquares;
            });
            setIsXturn(prevIsXturn => !prevIsXturn);
        }
    }
    

    return (
        <div className='h-[100vh] flex flex-col justify-center items-center'>
            <div className='bg-black h-90 w-90  '>
                <div className='h-30 bg-white '><Square row={0} handleClick={handleClick} squares={squares}  /></div>
                <div className='h-30 bg-white  '><Square row={1} handleClick={handleClick} squares={squares}/></div>
                <div className='h-30 bg-white '><Square row={2} handleClick={handleClick} squares={squares}/></div>
            </div>
            <div className='text-2xl font-bold m-10 '>{winner?<div> winner is {winner}</div>:<div>{isXturn?'X':'O'} chance</div>}</div>
            <button className='bg-orange-800 p-2 px-5 rounded-lg' onClick={() => window.location.reload()}>New Game</button>

        </div>
    );

};

export default GameBoard;

"use client"
import React, { useState } from 'react';
const Calc = () => {
    const[calc,setCalc]=useState("")
    const operation=(e:any)=>{
setCalc(calc.concat(e.target.value))
    }
    const clear=()=>{
        setCalc("")
    }
    const calculation=()=>{
setCalc(eval(calc).toString())
    }
    const handlePercentage = () => {
        setCalc((parseFloat(calc) / 100).toString());
      };
  return (
    <div className='bg-gray-300 text-white flex justify-center items-center w-screen h-screen'>
        <div className='w-64 h-auto bg-gray-300 rounded-2xl shadow-xl border-4 border-gray-100'>
            <div>
<input type="text" value={calc} className='text-black w-full rounded-lg shadow-[inset_0px_2px_4px_rgba(0,0,0,0.6)] placeholder:to-black bg-gray-100 px-1 outline-none text-right text-2xl pt-4' placeholder="0" />
            </div>
            <div className='bg-blue-200 bg-opacity-80 mb-2 '>
                <h1 className='text-gray-900 text-xs font-bold text-center py-2 '>JAWAD DEV</h1>
            </div>
            <div>
                <div className='flex justify-between m-2'>
                    <input type="button" value="C" onClick={clear} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value=">" onClick={operation}className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="%" onClick={handlePercentage} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="/" onClick={operation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                </div>
                <div className='flex justify-between m-2'>
                    <input type="button" value="7" onClick={operation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="8" onClick={operation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="9" onClick={operation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="*" onClick={operation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                </div>
                <div className='flex justify-between m-2'>
                    <input type="button" value="4" onClick={operation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="5" onClick={operation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="6" onClick={operation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="-" onClick={operation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                </div>
                <div className='flex justify-between m-2'>
                    <input type="button" value="1" onClick={operation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="2" onClick={operation}className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="3" onClick={operation}className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="+" onClick={operation}className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                </div>
                <div className='flex justify-between m-2'>
                    <input type="button" value="0"  onClick={operation}className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="00" onClick={operation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="." onClick={operation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input type="button" value="=" onClick={calculation} className='bg-white-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calc





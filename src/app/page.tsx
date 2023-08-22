import Image from 'next/image'
import Calc from './components/calc'
import Time from './components/time'
import Greeting from './components/greeting'

export default function Home() {
  return (
    <div>
        <div className='bg-green-400 flex justify-center text-4xl font-bold'>
          CALCULATOR APP
          
        </div>
        <div className='flex justify-evenly text-2xl font-bold bg-slate-100'>
        <Greeting/>
        <Time/>
        </div>
        
        <Calc/>
        </div>
       
  )
}

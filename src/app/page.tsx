import Image from 'next/image'
import Calc from './components/calc'
import Time from './components/time'

export default function Home() {
  return (
    <div>
        <div className='bg-green-400 flex justify-center text-4xl font-bold'>
          CALCULATOR APP
        </div>
        <div className='flex justify-center text-2xl font-bold bg-green-100'>
    <Time/>
    </div>
        <Calc/>
        </div>
       
  )
}

import Image from 'next/image'
import Calc from './components/calc'

export default function Home() {
  return (
    <div>
        <div className='bg-green-400 flex justify-center text-4xl font-bold'>
          CALCULATOR APP
        </div>
    
        <Calc/>
        </div>
       
  )
}

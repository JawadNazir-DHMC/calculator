import Image from 'next/image'
import Operation from './components/operation'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='bg-green-400 justify-center text-4xl font-bold'>
          CALCULATOR APP
        </div>
        <Operation/>

        </main>
  )
}

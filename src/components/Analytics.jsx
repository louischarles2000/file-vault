import {} from 'react'
import analyticsImg from '../assets/analytics-2.webp'

function Analytics() {
  return (
    <div
      className='w-full bg-white py-16 px-4'
      >
      <div 
        className='max-w-[1240px] px-2 mx-auto grid md:grid-cols-2 items-center'
        >
          <img 
            className='mx-auto my-4'
            src={analyticsImg} 
            alt='Analytics' />
          <div>
            <p
              className='text-[#80df9a] font-bold'
              >
              DATA ANALYTICS DASHBOARD
            </p>
            <h1 className='md:text-4xl sm:3xl text-2xl font-bold'>
              Manage File Analytics Centrally
            </h1>
            <p className='md:py-4 sm:py-2 py-1 text-justify text-[#555] font-bold'>
              With FileVault, you can effortlessly manage your files and data centrally, streamlining your workflow and ensuring easy access for authorized users. Our intuitive interface allows you to organize, upload, and share files with just a few clicks.</p>
            <button
              className='bg-[#000300] rounded-md md:mx-0 mx-auto my-6 py-3 text-[#80df9a] font-bold pl-[30px] pr-[30px]'
              >Get Started
            </button>
          </div>
      </div>
    </div>
  )
}

export default Analytics
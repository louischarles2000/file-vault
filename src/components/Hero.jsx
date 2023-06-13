import {} from 'react'
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#80df9a] md:text-[18px] text-[12px] font-bold p-2'>SECURE FILE STORAGE</p>
        <h1 className='md:text-4xl sm:text-4xl text-[20px] font-bold md:py-1'>File Storage and Security Simplified.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-2xl sm:text-[20px] text-[13px] font-bold md:py-1 py-2'>{`Guarantee and uphold your data's`} </p>
          <Typed
            className='md:text-2xl sm:text-[20px] text-[13px] font-bold pl-2 text-[#cccccc]'
            strings={[
              'confidentiality',
              'integrity',
              'availablity',
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p
          className='md:text-[14px] md:w-[60%] w-[80%] mx-auto sm:text-xs text-xs font-bold pl-2 pt-5 text-[#757575]'
          >
            Empower your{` data's`} potential with FileVault, the ultimate file server solution. Our cutting-edge platform combines seamless file management with robust security and privacy features.
          {/* Rest easy knowing that your sensitive data is safeguarded by state-of-the-art security measures, providing the highest level of protection for your valuable information. */}
        </p>
        <button
          className='bg-[#80df9a] rounded-md mx-auto my-6 py-3 text-[#000300] font-bold pl-[30px] pr-[30px]'
          >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero;

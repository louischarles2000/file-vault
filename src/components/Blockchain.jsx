import {} from 'react'
import BlockchainImg from '../assets/Blockchain.png'

function Blockchain() {
  return (
    <div
      className='w-full py-16 px-4'
      >
      <div 
        className='max-w-[1240px] px-2 mx-auto grid md:grid-cols-2 items-center'
        >
          <img 
            className='mx-auto my-4 w-[250px] h-[200px] md:hidden block'
            src={BlockchainImg} 
            alt='Blockchain' />
          <div>
            {/* <p
              className='text-[#80df9a] font-bold'
              >
              DATA Blockchain DASHBOARD
            </p> */}
            <h1 className='md:text-4xl sm:3xl text-2xl font-bold text-[#ffffff]'>
            Ensuring File Integrity with Blockchain Technology.
            </h1>
            <p className='md:py-4 sm:py-2 py-1 text-justify text-[#555] font-bold'>
              {`When you upload a file to FileVault, it undergoes a unique hashing process that generates a digital fingerprint. This fingerprint, along with other relevant metadata, is securely stored on the blockchain, creating a permanent record of the file's existence and content at that specific moment in time.`}
            </p>
            {/* <button
              className='bg-[#000300] rounded-md md:mx-0 mx-auto my-6 py-3 text-[#80df9a] font-bold pl-[30px] pr-[30px]'
              >Get Started
            </button> */}
          </div>
          <img 
            className='mx-auto my-4 w-[350px] h-[300px] hidden md:block'
            src={BlockchainImg} 
            alt='Blockchain' />
      </div>
    </div>
  )
}

export default Blockchain
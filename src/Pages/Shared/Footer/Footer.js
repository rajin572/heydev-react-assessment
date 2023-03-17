import React from 'react'
import usn from '../../../media/usn-logo-large.svg'
import cnn from '../../../media/CNNMoney_Logo.png'
import wsj from '../../../media/wsj.png'
import forbes from '../../../media/forbes.png'
import fortune from '../../../media/fortune.png'

const Footer = () => {
  return (
    <div className='bg-[#F2F2F2] pt-20 pb-10 grayscale'>
        <div className='w-[90%] mx-auto'>
            <h2 className=' text-gray-500 text-3xl text-center'>As Featured In</h2>
            <div className='flex justify-between items-center flex-wrap mt-10'>
                <img src={usn} alt="" className=' max-w-[50px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[150px] min-w-[50px] max-h-[50px]'/>
                <img src={cnn} alt="" className=' max-w-[50px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[150px] min-w-[50px] max-h-[50px]'/>
                <img src={wsj} alt="" className=' max-w-[50px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[150px] min-w-[50px] max-h-[50px]'/>
                <img src={forbes} alt="" className=' max-w-[50px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[150px] min-w-[50px] max-h-[50px]'/>
                <img src={fortune} alt="" className=' max-w-[50px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[150px] min-w-[50px] max-h-[50px]'/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-6 mt-10'>
                <div className=' md:col-span-2 mt-5'>
                    <h2 className='text-xl font-bold'>About Ardeo Education Soluation</h2>
                    <p>Ardeo partners with colleges across the U.S. to help student overcome the burden of student loans</p>
                </div>
                <div className=' md:col-span-4 mt-5'>
                    <h2 className='text-xl font-bold'>Contact US</h2>
                    <p>P.O Box 1476</p>
                    <p>Bloomingot, IN 47427</p>
                    <p>info@myLRPG.org</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
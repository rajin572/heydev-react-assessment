import React from 'react'
import { useLoaderData } from 'react-router-dom'
import userImg from '../../media/defaultUser.png'

const UserDetailsPage = () => {
    const user = useLoaderData()
    const {name} = user
  return (
    <div className='py-20'>
        <div className=' w-3/4 mx-auto grid grid-cols-3 gap-5'>
           <div className='bg-[#bb202d24] text-center'>
           <img src={userImg} alt=""  className=' rounded-full border-4 border-[#692438] w-28 mx-auto'/>
           <p>{name}</p>
           </div>
           <div className='bg-[#bb202d24] col-span-2'></div>
        </div>
    </div>
  )
}

export default UserDetailsPage
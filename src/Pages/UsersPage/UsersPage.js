import React from 'react'
import { useLoaderData } from 'react-router-dom'
import userImg from '../../media/defaultUser.png'

const UsersPage = () => {

    const data = useLoaderData()
    console.log(data);
  return (
    <div className='py-20 bg-[#f2f5ff]'>
        <div className=' w-4/5  pt-10 mx-auto border-t-[3px] border-[#bb202e]'>
            <div className='p-10 bg-white max-w-[350px] shadow-sm rounded '>
                <div className=' text-center'>
                    <img src={userImg} alt=""  className=' w-36 '/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UsersPage
import React from 'react'
import { Link } from 'react-router-dom'
import userImg from '../../media/defaultUser.png'

const UserCard = ({user}) => {
    const {id, name, username, email, phone} = user
  return (
    <div className='px-4 py-6 mx-auto bg-white max-w-[350px] min-w-[270px] sm:min-w-[300px] shadow-md hover:shadow-xl border-2 border-white hover:border-[#e2e2e2] rounded-lg '>
    <div className=' text-center'>
        <img src={userImg} alt=""  className=' rounded-full border-4 border-[#692438] w-28 mx-auto'/>
        <h3 className='mt-3 text-xl font-bold'>{name}</h3>
        <p className=' text-[#692438] text-base font-bold'>{username}</p>
    </div>
    <div className='my-5'>
        <p className='text-gray-500 text-[12px] md:text-[14px]'><span className=' text-[#692438] font-bold'>Phone: </span>{phone}</p>
        <p className='text-gray-500 text-[12px] md:text-[14px]'><span className=' text-[#692438] font-bold'>Email: </span>{email}</p>
    </div>
    <Link to={`/users/${id}`}>
    <button className='bg-[#bb202e] text-white w-full py-2 border-2 border-[#bb202e] hover:bg-white hover:text-[#bb202e] duration-500 rounded-md' >View Full details</button>
    </Link>
</div>
  )
}

export default UserCard
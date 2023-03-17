import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import primaryImage from '../../../media/primary_logo.jpg'

const Navbar = () => {

    const { user, setUser} = useContext(AuthContext);
    console.log(user);

    const [signOut, setSignOut] = useState(false);

    const handleSignOut = () => {
        localStorage.clear();
        setUser(null);
        setSignOut(true);
        console.log("hi");
    }

    useEffect(() => {
        if (signOut) {
            setSignOut(false);
        }
    }, [signOut]);


    // const { user, setUser} = useContext(AuthContext);
    // console.log(user);

    // const hundleDelete = (event) =>{
    //     // event.preventDefault()
    //     localStorage.clear()
    //     setUser(null)
    // }

    // useEffect(() =>{
    //     if(user){
           
    //     }
    // },[user])

    const menuItems = (
        <React.Fragment>
          <li className="font-bold rounded lg:mx-2  bg-white border-0 hover:bg-white focus:bg-white text-[#bb202e]">
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li className=" font-bold rounded lg:mx-2  bg-white border-0 hover:bg-white focus:bg-white text-[#bb202e]">
                <Link to="/users">Users</Link>
              </li>
              <li className="font-bold rounded lg:mx-2  bg-white border-0 hover:bg-white focus:bg-white text-[#bb202e]">
                <button onClick={handleSignOut}>Sign out</button>
              </li>
            </>
          ) : (
            <li className="font-bold rounded lg:mx-2  bg-white border-0 hover:bg-white focus:bg-white text-[#bb202e]">
              <Link to="/login">Login</Link>
            </li>
          )}
        </React.Fragment>
      );

  return (
    <div className="navbar bg-white text-zinc-900 flex justify-between px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-zinc-900 rounded-box"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="normal-case text-2xl font-bold">
          <img src={primaryImage} alt="" className='w-[100px] h-[60px] sm:w-[150px] sm:h-[60px] lg:w-[200px] lg:h-[70px] grayscale'/>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  )
}

export default Navbar
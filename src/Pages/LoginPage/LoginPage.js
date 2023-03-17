import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';

const LoginPage = () => {

    const { setUser} = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user);

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // eslint-disable-next-line eqeqeq
        if(email==user?.email &&password==user?.password){
            alert("successfully")
            setUser(user.name)
            navigate(from, {replace: true})
        }else{
            alert("fail")
        }
    }

  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shadow-2xl bg-base-100 p-10">
      <form onSubmit={handleSubmit}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered required:" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered required" />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#bb202e] border-2 border-[#bb202e] text-white hover:bg-white hover:text-[#bb202e] hover:border-[#bb202e]">Login</button>
        </div>
        <p>Haven't any account <Link to='/register' className=' text-[#bb202e]'>Create an account</Link></p>
      </form>
    </div>
  </div>
</div>
  )
}

export default LoginPage
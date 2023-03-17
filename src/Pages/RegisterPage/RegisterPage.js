import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const RegisterPage = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/login';

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            name: name,
            email: email,
            password: password
        }
        localStorage.setItem("user", JSON.stringify(user))
            
            form.reset()
            navigate(from, {replace: true})
    }

  return (
    <div className='h-[800px] bg-base-200 flex justify-center items-center'>
            <div className='w-96 p-7  min-h-screen'>
                <h2 className='text-5xl text-center my-10 font-bold'>Register</h2>
                <div className=' p-5 shadow-2xl bg-base-100 rounded-xl'>
                <form  onSubmit={handleSubmit}>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered w-full max-w-xs required" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered w-full max-w-xs required" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered w-full max-w-xs required"/>
                    </div>
                    <button className="btn bg-[#bb202e] border-2 border-[#bb202e] text-white hover:bg-white hover:text-[#bb202e] hover:border-[#bb202e] w-full my-5">Register</button>
                </form>
                <p>Already have an account! <Link  className=' text-[#bb202e]' to="/login"> Please Login</Link></p>
                </div>

            </div>
        </div>
  )
}

export default RegisterPage
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Signup() {
    const [id, setid] = useState("")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let resobj = { id,name, email, password };
        //console.log(resobj)
        fetch("http://localhost:8000/user", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(resobj)
        }).then((res) => {
            toast.success("Registerd sucessfully...")
            navigate('/');
        }).catch((err) => {
            toast.error("Error occured:" + err.message);
        })

    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
            <div className='bg-secondary p-3 rounded w-25'>
                <h2>SignUp</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <input value={id} onChange={e => setid(e.target.value)} type='text' placeholder='Enter your username...' name='name'
                            className='form-control rounded-5'></input>
                    </div>
                    <div className='mb-3'>
                        <input value={name} onChange={e => setname(e.target.value)} type='text' placeholder='Enter your Full name...' name='name'
                            className='form-control rounded-5'></input>
                    </div>
                    <div className='mb-3'>
                        <input value={email} onChange={e => setemail(e.target.value)} type='email' placeholder='Enter your email...' name='email'
                            className='form-control rounded-5'></input>
                    </div>
                    <div className='mb-3'>
                        <input value={password} onChange={e => setpassword(e.target.value)} type='password' placeholder='Enter your password...' name='password'
                            className='form-control rounded-5'></input>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-5'>Signup</button>
                    <p>You are agree to our terms and policies </p>
                    <Link to='/' className='btn btn-default border w-100 bg-light rounded-5'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
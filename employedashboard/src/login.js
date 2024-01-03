import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
    const [username, setname] = useState('')
    const [password, setpassword] = useState('')

    const navigate = useNavigate()

    const proceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:8000/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                //console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error("please enter a valid usename");
                } else {
                    if (resp.password === password) {
                        toast.success("success....");
                        navigate('/employe')
                    } else {
                        toast.error("please enter valid credentials");
                    }
                }
            }).catch((err) => {
                toast.error("Login failes due to:" + err.message);
            });
        }
    }

    const validate = () => {
        let result = true

        if (username === '' || username === null) {
            result = false
            toast.warning("please enter the username...")
        }

        if (password === '' || password === null) {
            result = false
            toast.warning("please enter the password...")
        }
        return result
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
            <div className='bg-secondary p-3 rounded w-25'>
                <h2>Login</h2>
                <form action='' onSubmit={proceedLogin}>
                    <div className='mb-3'>
                        <input value={username} onChange={e => setname(e.target.value)} type='text' placeholder='Enter your username...' name='email'
                            className='form-control bg-gradient rounded-5'></input>
                    </div>
                    <div className='mb-3'>
                        <input value={password} onChange={e => setpassword(e.target.value)} type='password' placeholder='Enter your password...' name='password'
                            className='form-control bg-gradient rounded-5'></input>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-5'>Login</button>
                    <p></p>
                    <Link to='/signup' className='btn btn-default w-100 rounded-5 bg-light text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login

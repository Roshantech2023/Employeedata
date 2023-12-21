import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Addemp() {
    const [id, setid] = useState("")
    const [name, setname] = useState("")
    const [date, setdate] = useState("")
    const [designation, setdesignation] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let resobj = { id,name, date, designation };
        //console.log(resobj)
        fetch("http://localhost:8000/employee", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(resobj)
        }).then((res) => {
            toast.success("Registerd sucessfully...")
            navigate('/employe')
        }).catch((err) => {
            toast.error("Error occured:" + err.message);
        })
    }
  return (
    <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
      <div className='w-50 bg-secondary rounded p-3'>
        <form action='' onSubmit={handleSubmit}>
          <h2>ADD Employe</h2>
          <div className='mb-2'>
            <input value={id} onChange={e => setid(e.target.value)} type='number' placeholder='Enter employe id' className='form-control' ></input>
          </div>
          <div className='mb-2'>
            <input value={name} onChange={e => setname(e.target.value)} type='text' placeholder='Enter employe name' className='form-control'></input>
          </div>
          <div className='mb-2'>
            <input value={date} onChange={e => setdate(e.target.value)} type='date' placeholder='enter date of birth' className='form-control'></input>
          </div>
          <div className='mb-2'>
            <input value={designation} onChange={e => setdesignation(e.target.value)} type='text'  placeholder='enter The designation'  className='form-control'></input>
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Addemp
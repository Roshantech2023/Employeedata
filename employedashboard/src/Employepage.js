import React, { useEffect, useState } from 'react'
import './employe.css'
import { Link } from 'react-router-dom'


function Employepage() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/employee')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, [])


    return (
    <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
    <div className=''>
      <h2 className='text-white'>Employes List</h2>
      <div className='buttons-emp d-flex justify-content-between bg-gray p-4'>
        <Link to="/" className='btn btn-primary'>LOGOUT</Link>
        <Link to="/adding" className='btn btn-secondary'>Add user</Link>
      </div>
    <div className='main-div'>
    <div className='table-responsive'  style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>DOB</th>
            <th>designation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employe,index) => {
            return <tr key={index}>
              <td>{employe.id}</td>
              <td>{employe.name}</td>
              <td>{employe.date}</td>
              <td>{employe.designation}</td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
    </div>
  </div>
  </div>
    )
}

export default Employepage
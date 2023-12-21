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
        <body>
            <div className='top-bar'>
             <form className='textForm'>
                    <input type='text' placeholder='Search here'/>
                </form>
                <div className='buttons'>
                        <Link to='/adding' className='button'> Add Employe</Link>
                </div>
                </div>
            <div class="center-container">
                <div class="centered-element">
                    {data.map((employee, index) => (
                        <div className='data' key={index}>
                            <p>EMP ID     :&nbsp;&nbsp;&nbsp;    <span className='emp'>{employee.id}</span></p>
                            <p>Name       :&nbsp;&nbsp;&nbsp;    {employee.name}</p>
                            <p>DOB        :&nbsp;&nbsp;&nbsp;    {employee.date}</p>
                            <p>Designation:&nbsp;&nbsp;&nbsp;    <span>{employee.designation}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </body>
        
    )
}

export default Employepage
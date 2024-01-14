import React from 'react'
import { useState } from 'react';
import Header from './Header'
function StudentRegistration() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [number, setNumber] = useState();
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., sending data to a server or performing validation
    console.log(course);
  };
  return (
    <div>
      <Header/>
      <div style={{maxWidth:"400px", maxHeight:"auto",margin:"20px auto", padding:"20px", border:"1px solid #ccc", borderRadius:"8px", boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)"}}>
        <h2>Student Registration Form</h2>
        <form autoComplete="off" className='form-group' onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input type="text" className='form-control' required
        onChange={(e)=>setName(e.target.value)} value={name}></input>
        <br/><br/>

        <label>Course</label><br/>

        <select id="myDropdown" value={course} onChange={(e)=>setCourse(e.target.value)}>
        <option value="">Select...</option>
        <option value="ADCA">ADCA</option>
        <option value="DCA">DCA</option>
        <option value="DOAP">DOAP</option>
        <option value="ADCP">ADCP</option>
        <option value="DTP">DTP</option>
        <option value="DIPWD">DIPWD</option>
      </select>

      <p>Selected course: {course}</p>

        {/* <input type="text" className='form-control' required
        onChange={(e)=>setCourse(e.target.value)} value={course}></input> */}
        <br/><br/>
        <label>Email</label><br/>
        <input type="email" className='form-control' required
        onChange={(e)=>setEmail(e.target.value)} value={email}></input>
        <br/><br/>
        <label>Phone Number</label><br/>
        <input type="tel" pattern="[0-9]{10}" className='form-control' required
        onChange={(e)=>setNumber(e.target.value)} value={number}></input>
        <br/><br/>
                   
        <div style={{display:'flex', justifyContent:'center'}}>
            {/* <button type="reset" className='btn btn-success btn-md'>
                    RESET
            </button> */}
            <button type="submit" className='btn btn-success btn-md'>
                SUBMIT
            </button>
        </div>
      </form>
    </div>
        
    </div>
  );
}

export default StudentRegistration
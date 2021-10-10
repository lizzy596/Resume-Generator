import React, { useState, useEffect } from 'react';



const Work = ({ onAdd }) => {

const [company, setCompany] = useState('')
const [position, setPosition] = useState('')
const [role, setRole] = useState('')
const [start, setStart] = useState('')
const [end, setEnd] = useState('')
const [submitted, setSubmitted] = useState(false)

useEffect(() => {
  const timeout = setTimeout(() => {
    setSubmitted(false);
  }, 2000);
  return () => clearTimeout(timeout);
}, [submitted]);



const handleSubmit = (e) => {
  e.preventDefault();
  
  onAdd({company, position,role, start, end})
  setCompany('')
  setPosition('')
  setRole('')
  setStart('')
  setEnd('')
  setSubmitted(true)
}

 return (
    <>
     <div className={`${submitted ? 'submit-wrapper' : ''}`}>
  <form onSubmit={handleSubmit}>
    <h1 className="title">Work Experience</h1>
  
    
    <div className="form-control">
    <label>
    Company:
    </label>
    <input 
    type="text" 
    name="company"
    value={company}
    onChange={(e) => setCompany(e.target.value)}
     />

   </div>

      <div className="form-control">
        
   <label>
    Position:
    </label>
    <input 
    type="text" 
    name="position" 
    value={position}
    onChange={(e) => setPosition(e.target.value)}
    />
   </div>
   

  
   <label class="dates">
    <h3>Dates of Employment:</h3>
  </label>

  <div className="form-control">
     <label>
        Start Year:
      </label>
      <input 
    type="text" 
    name="start" 
    value={start}
    onChange={(e) => setStart(e.target.value)}
    />
  </div>

  <div className="form-control">
     <label>
        End Year:
      </label>
      <input 
    type="text" 
    name="end" 
    value={end}
    onChange={(e) => setEnd(e.target.value)}
    />
  </div>
  
  
<div className="form-control-textarea">
   <label className="duties">
    Responsibilites:
    </label>
    <textarea 
    type="text" 
    name="role" 
    value={role}
    rows="10" 
    cols="80"
    onChange={(e) => setRole(e.target.value)}
    />
  </div>

  <button className="btn btn-submit">Submit</button>

 </form>
 </div>
 
 


     
  </>
      
    
  )
}

export default Work
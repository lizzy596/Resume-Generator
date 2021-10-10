import React, { useState, useEffect} from 'react';

const EducationItem = ({ onAdd }) => {


const [school, setSchool] = useState('')
const [study, setStudy] = useState('')
const [submitted, setSubmitted] = useState(false)

useEffect(() => {
  const timeout = setTimeout(() => {
    setSubmitted(false);
  }, 2000);
  return () => clearTimeout(timeout);
}, [submitted]);


const handleSubmit = (e) => {
  e.preventDefault()
  onAdd({school, study})
  setSchool('')
  setStudy('')
  setSubmitted(true)
}


  return (
    <>
     <div className={`${submitted ? 'submit-wrapper' : ''}`}>
    <form onSubmit={handleSubmit} >
      <h1 className="title">Education Experience</h1>
      <div className="form-control">
        <label>
        School:
    </label>
    <input 
    type="text" 
    name="school"
    value={school}
    onChange={(e) => setSchool(e.target.value)}
     />
    </div>
    <div className="form-control">
        <label>
        Studied:
    </label>
    <input 
    type="text" 
    name="study"
    value={study}
    onChange={(e) => setStudy(e.target.value)}
     />
    </div>

    <button className="btn btn-submit">Submit</button>

    </form>
    </div>
      
    </>
  )
}

export default EducationItem
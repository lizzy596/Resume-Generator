import React, { useState, useEffect } from 'react';

const SkillItem = ({ onAdd }) => {





  const [skill, setSkill] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubmitted(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({skill})

    setSkill('')
    setSubmitted(true)


  }

  return (
    <>
     <div className={`${submitted ? 'submit-wrapper' : ''}`}>
    <form onSubmit={handleSubmit}>
      <h1 className="title">Skills</h1>
      <div className="form-control">
        <label>
        Skill:
    </label>
    <input 
    type="text" 
    name="skill"
    value={skill}
    onChange={(e) => setSkill(e.target.value)}
     />
    </div>

    <button className="btn btn-submit">Submit</button>

    </form>
    </div>
      
    </>
  )
}

export default SkillItem
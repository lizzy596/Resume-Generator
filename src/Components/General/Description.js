import React, { useState } from 'react';

const Description = ({ onAdd }) => {

  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(description)
    setSubmitted(true)
  }
  return (
    <div className={`${submitted ? 'submit-wrapper' : ''}`}>
    <form onSubmit={handleSubmit}>
    <div className="form-control-textarea">
   <label className="duties" style={{fontWeight: 'bold'}}>
    Introduction:
    </label>
    <textarea 
    type="text" 
    name="role" 
    value={description}
    rows="10" 
    cols="80"
    onChange={(e) => setDescription(e.target.value)}
    />
  </div>

  <div className="btn-container">
    <button  className='btn btn-submit'>Submit</button>
     </div>
    </form>
    </div>
    
  )
}

export default Description
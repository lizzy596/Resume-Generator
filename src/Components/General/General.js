import React, { useState } from 'react';





const General = ({ onAdd, info }) => {

 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [address, setAddress] = useState('')
 const [jobName, setJobName] = useState('')
 const [phone, setPhone] = useState('')
 const [submitted, setSubmitted] = useState(false)

 
const handleSubmit = (e) => {
   e.preventDefault()
   onAdd({name, address, jobName, email, phone})
   setSubmitted(true)
    
}






  return (
    <> 
    
  
    
    <div className={`${submitted ? 'submit-wrapper' : ''}`}>
     
    <form onSubmit={handleSubmit}>
      <h3 className="title">General Information</h3>
      <div className="form-control">
      <label>
      Full Name:
      <input 
      type="text" 
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
       />
     </label>
     </div>

     <div className="form-control">
      <label>
      Title:
      <input 
      type="text" 
      name="name"
      value={jobName}
      onChange={(e) => setJobName(e.target.value)}
       />
     </label>
     </div>

     <div className="form-control">
      <label>
      Address:
      <input 
      type="text" 
      name="address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
       />
     </label>
     </div>

        <div className="form-control">
          
     <label>
      Email:
      <input 
      type="text" 
      name="name" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      

     </label>

      </div>

   

    

     <div className="form-control">
     <label>
      Phone:
      <input 
      type="text" 
      name="name" 
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      />
     

     </label>
        
        </div>

     <div className="btn-container">
       <button  className='btn btn-submit'>Submit</button>
     </div>
      
    </form>

    </div> 

    </>
    
  )
}

export default General
import React, { useState } from 'react';
import Work from './WorkItem';
import uniqid from 'uniqid';


const WorkExperience = ({ onAdd }) => {

  const [showWork, setShowWork] = useState(false)

  const handleShow = () => {
    setShowWork(!showWork)
  }

 


 

 return (
    <>
      <div className="work-btn-wrapper">
        <button 
        className="black-btn" 
        style={{backgroundColor: 'black'}}
        onClick={handleShow}
        
        >{showWork ? 'Hide Work Experience' : 'Add Work Experience'}
        </button>

       
     
      </div>
    {showWork && <Work onAdd={onAdd} />}

 
 
     
      
    </>
  )
}

export default WorkExperience
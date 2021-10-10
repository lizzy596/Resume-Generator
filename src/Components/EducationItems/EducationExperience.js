import React, { useState} from 'react';

import EducationItem from './EducationItem'


const EducationExperience = ({ onAdd }) => {
  
  const [showEdu, setShowEdu] = useState(false)

  const handleShow = () => {
    setShowEdu(!showEdu)
  }

  


 

 return (
    <>
      <div className="work-btn-wrapper">
        <button 
        className="black-btn" 
        style={{backgroundColor: 'black'}}
        onClick={handleShow}
        
        >{showEdu ? 'Hide Education' : 'Add Education'}
        </button>
     
      </div>
    {showEdu && <EducationItem onAdd={onAdd} />}
      
    </>
  )
}

export default EducationExperience
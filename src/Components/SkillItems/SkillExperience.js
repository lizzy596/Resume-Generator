import React, { useState } from 'react';
import SkillItem from './SkillItem';

const SkillExperience = ( { onAdd }) => {
  const [showSkills, setShowSkills] = useState(false)

  const handleShow = () => {
    setShowSkills(!showSkills)
  }




 

 return (
    <>
      <div className="work-btn-wrapper">
        <button 
        className="black-btn" 
        style={{backgroundColor: 'black'}}
        onClick={handleShow}
        
        >{showSkills ? 'Hide Skills' : 'Add Skills'}
        </button>

       
     
      </div>
    {showSkills && <SkillItem onAdd={onAdd}/>}
      
    </>
  )
}

export default SkillExperience
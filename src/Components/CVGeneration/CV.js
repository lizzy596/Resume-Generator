import React, { useState} from 'react';

import { AiOutlinePhone, AiOutlineHome, AiOutlineMail } from 'react-icons/ai'

import { BsFillTrashFill } from "react-icons/bs";




const CV = ({general, description, workExperience, edu, onDelete, skills, onDelete2, onDelete3, onHandle}) => {

  const [notFinal, setNotFinal] = useState(true)
  const [generate, setGenerate ] = useState(false)

  const handleFinalization = () => {
    setNotFinal(false)
    setGenerate(true);
  }
 

  return (
    <>
    <div className="cv-wrapper">
     <header>
       <h1>{general.name}</h1>
       <hr />
       <h2>{general.jobName}</h2>
       <hr className="bottom" />
      </header>

      <div className="profile-wrapper">
                  <div className="contact">
                    <h3>Contact</h3>
                  <div className="contact-items">
                  <AiOutlinePhone/>  
                 <h4>{general.phone}</h4>
                    </div>

                <div className="contact-items">
                <AiOutlineMail/> 
                 <h4>{general.email}</h4>
                 </div>

                 <div className="contact-items">
                 <AiOutlineHome/>
                <h4>{general.address}</h4>
                </div>
                  </div>
              <div className="profile">
               <div className="profile-items">
               <h3>Profile</h3>
                <div className="desc">
                <p>{description}</p>
                </div>
          </div>
        </div>
       </div>

       <hr className="top bottom" />



       <div className="edu-work-wrapper">
          <div className="education">
             <h3>Education</h3>

             {edu.map((item) => {
               const { newId, school, study } = item
               return (
                 <div className="specific-education" key={newId}>
                   <h4> {school} {notFinal && <BsFillTrashFill onClick={() => onDelete3(newId)} />}</h4>
                   <h5>{study}</h5>
                 </div>
               )
             })}
             
               

            <h3>Skills</h3>
            <div className="specific-education">
                 {skills.map((item) => {
                   return (
                   <h4 key={item.newId}>{item.skill} {notFinal && <BsFillTrashFill className="icon"  onClick={() => onDelete2(item.newId)} />}</h4>
                   )
                 })}
                
                 
                  
                </div>
            

          </div>
          <div className="work-experience">
            <h3>Experience</h3>

            {workExperience.map((item) => {
              const {newId, company, position, start, end, role} = item
              return (

                
                <div className="specific-experience" key={newId}>
                 
                  <h5>{company} | Start: {start} End: {end}   {notFinal  && <BsFillTrashFill className="icon"  onClick={() => onDelete(newId)} />}</h5>
                  <h5>{position}</h5>
                  <p>{role}</p>
                </div>
              )
            })}
     

          </div>
        </div>
      </div>
      { generate ? '' : <div className="show">
      <button className="show-btn" onClick={handleFinalization}>Finalize Draft</button>
      </div>}

      { generate && <div className="show">
      <button className="show-btn" onClick={onHandle}>Generate Resume</button>
      </div>}
  
      </>
  )
}

export default CV
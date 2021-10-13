import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import General from './Components/General/General'
import Description from './Components/General/Description'
import CV from './Components/CVGeneration/CV'
import WorkExperience from './Components/WorkItems/WorkExperience';
import EducationExperience from './Components/EducationItems/EducationExperience';
import SkillExperience from './Components/SkillItems/SkillExperience';
import ShowCV from './Components/Functions/ShowCV';
//import CVPrint from './Components/CVGeneration/CVPrint';
import Example from './Components/CVGeneration/CVPrint';
import ShowSample from './Components/Functions/ShowSample';
import {Helmet} from "react-helmet";









function App() {






 
  const [general, setGeneral] = useState({})
  const [description, addDescription] = useState('')
  const [workExperience, setWorkExperience] = useState([])
  const [skills, setSkills] = useState([])
  const [edu, setEdu] = useState([])
  const [showCV, setShowCv] = useState(false)
  const [showForm, setShowForm] = useState(true)


  





 





  const submitGeneral = ({name, address, jobName, email, phone}) => {
   setGeneral({name, address, jobName, email, phone})
}

const submitDescription = (desc) => {
  addDescription(desc)
}

const submitWorkExperience = ({company, position, start, end, role }) => {
  const newId = uniqid()
  const newItem = { newId, company, position, start, end, role }
  setWorkExperience([...workExperience, newItem])
  
}

const submitSkillExperience = ({skill}) => {
  const newId = uniqid()
  const newItem = { newId, skill }
  setSkills([...skills, newItem])
 
}

const submitEduExperience = ({ school, study }) => {
  const newId = uniqid()
  const newItem = {newId, school, study }
  setEdu([...edu, newItem])
}

const handleDelete = (id) => {
  setWorkExperience(workExperience.filter((item) => item.newId !== id))
  
}

const handleDeleteSkill = (id) => {
  setSkills(skills.filter((item) => item.newId !== id))
  
}

const handleDeleteEdu = (id) => {
  setEdu(edu.filter((item) => item.newId !== id))
}


const handleShowCV = () => {
  setShowCv(true)
}

const handleHideForm = () => {
  setShowForm(false)
}










  return (
    <div className="container">
       <Helmet>
        <title>Resume Builder</title>
        <meta name="description" content="resume builder" />
      </Helmet>
      {showForm && <h1>Resume Generator</h1>}
      {showForm && <h2>Generate a Professional Resume in Minutes</h2>}
      {showForm && <ShowSample />}
       
       {showForm && <General onAdd={submitGeneral} info={general}  />}
       {showForm && <Description onAdd={submitDescription} />}
       {showForm && <WorkExperience onAdd={submitWorkExperience}  />}
       {showForm && <EducationExperience onAdd={submitEduExperience} />}
       {showForm && <SkillExperience onAdd={submitSkillExperience} />}
       {showForm && <ShowCV onShow={handleShowCV}/>}
       {showCV && <CV general={general} description={description} workExperience={workExperience} onDelete={handleDelete} skills={skills} onDelete2={handleDeleteSkill} edu={edu} onDelete3={handleDeleteEdu} onHandle={handleHideForm} />}

  

</div>
  );
}

export default App;







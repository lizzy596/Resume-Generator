import React, { Component, useRef, useState } from 'react'

import { useReactToPrint } from 'react-to-print'

import { AiOutlinePhone, AiOutlineHome, AiOutlineMail } from 'react-icons/ai'



class CVPrint extends Component {


  constructor(props) {
    super(props);
  }

  

  render() {
   return (
    <>
    <div className="cv-wrapper">
    <header>
       <h1>John Smith</h1>
       <hr />
       <h2>Web Developer</h2>
       <hr className="bottom" />
      </header>

      <div className="profile-wrapper">
                  <div className="contact">
                    <h3>Contact</h3>
                  <div className="contact-items">
                  <AiOutlinePhone/>  
                 <h4>214-826-8989</h4>
                    </div>

                <div className="contact-items">
                <AiOutlineMail/> 
                 <h4>John.S@gmail.com</h4>
                 </div>

                 <div className="contact-items">
                 <AiOutlineHome/>
                <h4>1414 Maple Ave, Austin,TX 78704</h4>
                </div>
                  </div>
              <div className="profile">
               <div className="profile-items">
               <h3>Profile</h3>
                <div className="desc">
                <p>Web Developer with 5+ years experience in designing and developing user interfaces, testing, debugging and training staff within eCommerce technologies.Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies </p>
                </div>
          </div>
        </div>
       </div>

       <hr className="top bottom" />

       <div className="edu-work-wrapper">
          <div className="education">
             <h3>Education</h3>
          <div className="specific-education">
                   <h4>Univerisity of Michigan</h4>
                   <h5>Computer Science</h5>
                 </div>
              
             
               

            <h3>Skills</h3>
            <div className="specific-education">
                
                   <h4>HTML/CSS</h4>
                   <h4>Javascript</h4>
                   <h4>React</h4>
            </div>
            

          </div>
          <div className="work-experience">
            <h3>Experience</h3>

            

                
                <div className="specific-experience">
                 
                  <h5> Magnus Technologies | Start: 2015 End: Present</h5>
                  <h5>Senior Web Developer</h5>
                  <p>Revamped Web Security Applications. Designed and developed user-friendly website, including optimized check-out page that increased user-clicks and subsequently customer purchases by 20%.</p>
                </div>

                <div className="specific-experience">
                 
                  <h5> Tridant Tech | Start: 2015 End: Present</h5>
                  <h5>Senior Web Developer</h5>
                  <p>Revamped Web Security Applications. Designed and developed user-friendly website, including optimized check-out page that increased user-clicks and subsequently customer purchases by 20%.</p>
                </div>

                <div className="specific-experience">
                 
                  <h5> Focus Solutions | Start: 2010 End: 2015</h5>
                  <h5>Junior Web Developer</h5>
                  <p>Developed dynamic and interactive web site that insured high traffic, page views, and user experience, resulting in 40% increase in sales revenue.</p>
                </div>
            
     

          </div>
        </div>
      </div>
    

    </>
   )
  }
} 


//export default CVPrint;


const Example = () => {

  const [show, setShow] = useState(true)
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    
    content: () => componentRef.current
  })

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div className="show form">
      <CVPrint ref={componentRef} />
      <button onClick={handlePrint} className="sample-btn">Print to PDF</button>
    </div>
  )

}

export default Example 
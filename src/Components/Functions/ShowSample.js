import { useState } from 'react'
import Example from '../CVGeneration/CVPrint'

const ShowSample = () => {

  const [showSample, setShowSample] = useState(false)
  
  const handleShow = () => {
    setShowSample(!showSample)
  }

  return (
    <div className="show form">
    <button className="sample-btn" onClick={handleShow}>
      {showSample ? 'Hide Sample Resume' : 'Show Sample Resume'}
    </button>
    <div>
    {showSample && <Example />}
    </div>

    { showSample && <button className="sample-btn" onClick={handleShow}>
    Hide Sample Resume</button>}
    
    </div>
  )
}

export default ShowSample
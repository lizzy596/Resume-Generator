import React from 'react'

const ShowCV = ({ onShow }) => {
  return (
    <div className="show">
    <button className="show-btn" onClick={onShow}>
      Show CV Draft
    </button>
    </div>
  )
}

export default ShowCV
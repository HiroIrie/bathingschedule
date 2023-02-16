import React from 'react'

function InputField(props) {
  return (
    <div className="input-field">
      <label className="input-label">{props.title}:</label>
      <p className="input-value">{props.value}</p>
    </div>
  )
}

export default InputField
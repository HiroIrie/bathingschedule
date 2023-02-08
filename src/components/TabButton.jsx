import React from 'react'

function TabButton(props) {
  return (
    <button
          className={`tab-button ${props.activeTab === props.day && "active"}`}
          onClick={() => props.handleClick(props.day)}
        >
        {props.day}  
        </button>
  )
}

export default TabButton
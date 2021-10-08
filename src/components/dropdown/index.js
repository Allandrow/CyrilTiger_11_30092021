import React from 'react'
import Arrow from '../arrow'
import './dropdown.css'

const Dropdown = (props) => {
  return (
    <details className="dropdown">
      <summary>
        {props.title}
        <Arrow />
      </summary>
      <div>
        {props.text && <p>{props.text}</p>}
        {props.list && (
          <ul className="dropdownList">
            {props.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </details>
  )
}

export default Dropdown

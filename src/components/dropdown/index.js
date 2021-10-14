import React from 'react'
import Arrow from '../arrow'
import './dropdown.css'

const Dropdown = ({ title, text, list }) => {
  return (
    <details className="dropdown">
      <summary>
        {title}
        <Arrow />
      </summary>
      <div>
        {text && <p>{text}</p>}
        {list && (
          <ul className="dropdownList">
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </details>
  )
}

export default Dropdown

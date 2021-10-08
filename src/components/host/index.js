import React from 'react'
import './host.css'

const splitHostName = (name) => {
  const [firstName, lastName] = name.split(' ')
  return (
    <h3>
      <span>{firstName}</span>
      <span>{lastName}</span>
    </h3>
  )
}

const Host = (props) => {
  const { name, picture } = props.data
  return (
    <div className="host">
      {splitHostName(name)}
      <img src={picture} alt="" />
    </div>
  )
}

export default Host

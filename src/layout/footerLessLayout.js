import React from 'react'
import Header from '../components/header'

const FooterLessLayout = (props) => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        {props.children}
      </div>
    </div>
  )
}

export default FooterLessLayout

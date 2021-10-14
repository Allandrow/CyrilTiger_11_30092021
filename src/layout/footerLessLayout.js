import React from 'react'
import Header from '../components/header'

const FooterLessLayout = ({ children }) => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default FooterLessLayout

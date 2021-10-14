import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const MainLayout = ({children}) => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout

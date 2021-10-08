import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const MainLayout = (props) => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout

import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

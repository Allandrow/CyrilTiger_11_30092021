import React from 'react'
import Header from '../components/header'

export default class FooterLessLayout extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          {this.props.children}
        </div>
      </div>
    )
  }
}

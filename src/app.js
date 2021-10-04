import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Error from './pages/error'
import Header from './components/header'
import Location from './pages/location'
import Footer from './components/footer'

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/location/:id" component={Location} />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}

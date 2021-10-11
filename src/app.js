import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Error from './pages/error'
import Location from './pages/location'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/about">
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
      </Router>
    )
  }
}

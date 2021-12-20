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
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/location/:id" component={Location} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    )
  }
}

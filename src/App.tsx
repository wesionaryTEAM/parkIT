import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from './components/index'
import { Register } from './components/index'
import Index from './components/pages/home'
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            component={Login}>
          </Route>
          <Route
            exact
            path="/index"
            component={Index} />

          <Route exact
            path="/register"
            component={Register}>
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App;

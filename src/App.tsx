import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Layouts/Login'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
          exact
          path='/'
          component={() => (            
            <Login />
          )}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

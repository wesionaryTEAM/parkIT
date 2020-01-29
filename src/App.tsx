import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from './components/index'
import { Register } from './components/index'
import { Provider } from 'react-redux'
import configureStore from './store'

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={configureStore()}>
        <Router>
          <Switch>
            <Route
              exact
              path='/'
              component={Login}>
            </Route>
            <Route exact
              path="/register"
              component={Register}>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App;

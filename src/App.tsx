import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Register } from './components/index'
import Index from './components/pages/home'
import GuestRoute from './utils/GuestRoute'
import PrivateRoute from './utils/PrivateRoute'

//redux stuff
import { Provider } from 'react-redux';
import store from './redux/store';
import { CheckAuthentication } from './utils/CheckAuthentication'
import ProfileAdd from './components/pages/Profile/ProfileAdd';
 

const App: React.FC = () => {
  useEffect(() => {
    CheckAuthentication();

  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={Index} />

            <GuestRoute
              exact
              path='/login'
              component={Login} />
            <GuestRoute
              exact
              path='/register'
              component={Register} />
            <PrivateRoute
            exact
            path="/profile_add"
            component={ProfileAdd} />

          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App;

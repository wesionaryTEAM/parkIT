import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Register } from './components/index'
import Index from './components/pages/home'
import GuestRoute from './utils/GuestRoute'
import PrivateRoute from './utils/PrivateRoute'

//redux stuff
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { CheckAuthentication } from './utils/CheckAuthentication'
import ProfileAdd from './components/pages/Profile/ProfileAdd';
import { PersistGate } from 'redux-persist/integration/react';


const App: React.FC = () => {
  useEffect(() => {
    CheckAuthentication();

  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App;

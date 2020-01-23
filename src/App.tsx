import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
          exact
          path='/'
          component={() => (            
             <div>hello world!</div>
          )}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

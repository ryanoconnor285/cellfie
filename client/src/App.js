import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './components/content/Dashboard'
import Landing from './components/content/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'


function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={Landing} />
        <section>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </section>
      </React.Fragment>
    </Router>
  );
}

export default App;
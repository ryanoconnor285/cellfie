import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Landing from './components/content/Landing'
import Navbar from "./components/navigation/Navbar";


function App() {
  return (
    <UserProvider>
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
        </React.Fragment>
      </Router>
    </UserProvider>
  );
}

export default App;
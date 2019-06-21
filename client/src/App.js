import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { RunProvider } from "./context/RunContext";
import Landing from "./components/content/Landing";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <UserProvider>
      <RunProvider>
        <Router>
          <React.Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
          </React.Fragment>
        </Router>
      </RunProvider>
    </UserProvider>
  );
}

export default App;

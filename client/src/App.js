import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FileProvider } from "./context/FileContext";
import { RunProvider } from "./context/RunContext";
import Landing from "./components/content/Landing";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
      <FileProvider>
        <RunProvider>
          <Router>
            <React.Fragment>
              <Navbar />
              <Route exact path="/" component={Landing} />
            </React.Fragment>
          </Router>
        </RunProvider>
      </FileProvider>
  );
}

export default App;

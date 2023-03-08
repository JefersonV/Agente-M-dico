import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Diagnostic from './pages/Diagnostic';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact path="/" component={Home}
          />
          <Route
           path="/diagnostic"
           component={Diagnostic}
          />
           
        </Switch>
        <Route>

        </Route>
      </Router>
    </>
  )
}

export default App

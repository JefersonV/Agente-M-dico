import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
            exact path="/"
          >
            <Home />
          </Route>
          <Route
           exact path="/diagnostic"
          >
            <Diagnostic />
          </Route>
        </Switch>
        <Route>

        </Route>
      </Router>
    </>
  )
}

export default App

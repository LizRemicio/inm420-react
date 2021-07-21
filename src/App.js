import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About"; 
import Contact from "./pages/Contact";


export default function App() {
  return (
    <Router>
      <div>
        <nav className="container">
          <ul className="list">
            <li>
              <Link className="links" to="/">Home</Link>
            </li>
            <li>
              <Link className="links" to="/about">About</Link>
            </li>
            <li>
              <Link className="links" to="/projects">Projects</Link>
            </li>
            <li>
              <Link className="links" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




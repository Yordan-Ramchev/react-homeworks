import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';
import 'bulma/css/bulma.css';

import * as pages from './pages';

function Home() {
  return (
    <h1>
      <span role="img" aria-label="hi">
        Home
      </span>
    </h1>
  );
}
export default function App() {
  return (
    <Router>
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              {Object.keys(pages).map((name, i) => (
                <NavLink
                  to={`/${name.toLowerCase()}`}
                  key={i}
                  className="navbar-item">
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Switch>
          {Object.keys(pages).map((name, i) => (
            <Route path={`/${name.toLowerCase()}`} key={i}>
              {React.createElement(pages[name])}
            </Route>
          ))}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuItem from './pages/MenuItem';
import ContactUs from './pages/ContactUs';
import OurStory from './pages/OurStory';
import ShoppingCart from './pages/ShoppingCart';
import NoMatch from './pages/NoMatch';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path={`/menu/:pizzaId`} children={<MenuItem />} />
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/our-story">
            <OurStory />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuItem from './pages/MenuItem';
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';
import CheckoutShoppingCart from './pages/CheckoutShoppingCart';
import CheckoutPaymentInfo from './pages/CheckoutPaymentInfo';
import CheckoutOrderReview from './pages/CheckoutOrderReview';
import CheckoutThankYou from './pages/CheckoutOrderReview';
import NoMatch from './pages/NoMatch';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="content-wrapper">
        <Switch>
          <Route exact strict path="/">
            <Home />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/menu/:pizzaId">
            <MenuItem />
          </Route>
          <Route exact path="/contact-us">
            <Contact />
          </Route>
          <Route exact path="/our-story">
            <OurStory />
          </Route>
          <Route exact path="/shopping-cart">
            <CheckoutShoppingCart />
          </Route>
          <Route exact path="/payment-info">
            <CheckoutPaymentInfo />
          </Route>
          <Route exact path="/order-review">
            <CheckoutOrderReview />
          </Route>
          <Route exact path="/thank-you">
            <CheckoutThankYou />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;

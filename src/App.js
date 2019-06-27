import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home';
import {Header} from './components/Header';
import UserDetails from './components/UserDetails';
import OrderSummary from './components/OrderSummary';
import OrderConfirmation from './components/OrderConfirmation';

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Header />
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/user-details/" component={UserDetails} />
            <Route path="/order-summary/" component={ OrderSummary} />
            <Route path="/order-confirmation/" component={OrderConfirmation} />
          </div>
      </Router>
    </Provider>
  );
}

export default App;

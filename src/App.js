import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home';
import {Header} from './components/Header';
import UserDetails from './components/UserDetails';
import OrderSummary from './components/OrderSummary';
import OrderConfirmation from './components/OrderConfirmation';
import SortHotels from './components/SortHotels';
import GetNews from './components/GetNews';
import Clock from './components/Clock';
import {Counter} from './components/Counter';
function App() {
  return (
      <Router>
          <Header />
          <div className="container">
            <Counter coo={true}/>
            <Clock />
            <SortHotels />
            <GetNews />
            <Route path="/" exact component={Home} />
            <Route path="/user-details/" component={UserDetails} />
            <Route path="/order-summary/" component={ OrderSummary} />
            <Route path="/order-confirmation/" component={OrderConfirmation} />
          </div>
      </Router>
  );
}

export default App;

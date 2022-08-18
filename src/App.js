import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import { Header } from "./components/Header";
import UserDetails from "./components/UserDetails";
import OrderSummary from "./components/OrderSummary";
import OrderConfirmation from "./components/OrderConfirmation";
import SortHotels from "./components/SortHotels";
import GetNews from "./components/GetNews";
import Clock from "./components/Clock";
import { Counter } from "./components/Counter";
import Toggle from "./components/Toggle";
function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Toggle />
        <Counter coo={true} />
        <Clock />
        <SortHotels />
        <GetNews />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/user-details/" element={<UserDetails />} />
          <Route path="/order-summary/" element={<OrderSummary />} />
          <Route path="/order-confirmation/" element={<OrderConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

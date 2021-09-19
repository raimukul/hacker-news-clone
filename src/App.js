import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Home from './components/homepage/Index'

function App() {
  return (
    <div>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;

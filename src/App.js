import React from 'react';
import Home from './pages/home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './pages/about';
import Services from './pages/services';
import Team from './pages/team';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Portfoliodetails from './pages/portfoliodetails';


function App() {

  return (
 
    <Router>
    <Switch>
  
      <Route path="/portfoliodetails"  component={Portfoliodetails}/>
      <Route path="/portfolio"  component={Portfolio}/>
      <Route path="/contact"  component={Contact}/>
      <Route path="/blog"  component={Blog}/>
      <Route path="/team"  component={Team}/>
      <Route path="/services"  component={Services}/>
      <Route path="/about"  component={About}/>

      <Route path="/"  component={Home}/>
     
  </Switch>
</Router>
  


  )
}

export default App;

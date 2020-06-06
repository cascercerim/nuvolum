import React from 'react';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Carousel from './components/carousel';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
        </Switch>
        <Carousel />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

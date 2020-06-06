import React from 'react';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PageRenderer from './page-renderer';
import Carousel from './components/carousel';
import Footer from './components/footer';



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
        <Carousel />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

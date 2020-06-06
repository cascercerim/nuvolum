import React, { Component } from 'react';
import Navigation from './components/Navigation/navigation';
import { BrowserRouter as Router } from 'react-router-dom'
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/Backdrop/Backdrop';

import Carousel from './components/carousel';
import Footer from './components/footer';




class App extends Component {

  state = {
    sideDrawerOpen: false
  };
  // method that opens side drawer
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  // method that closes side drawer
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }


    return (
      <Router>
        <div style={{
          height: '100%'
        }}>
          <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Carousel />
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;

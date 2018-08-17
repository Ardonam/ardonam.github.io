import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css';
import App from './App';
import Code from './Code';

import registerServiceWorker from './registerServiceWorker';
// import {Section, Link} from 'react-scroll-nav';
// var Section = require('react-scroll-nav').Section
// var Link = require('react-scroll-nav').Link


class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
      {/* onUpdate={() => window.scrollTo(0, 0)} */}

        <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/portfolio' render={(props) => (
            <App location={"portfolio"} />
          )}/>
          <Route exact path='/about' render={(props) => (
            <App location={"about"} />
          )}/>
          <Route exact path='/hobbies' render={(props) => (
            <App location={"hobbies"} />
          )}/>
          <Route exact path='/info' render={(props) => (
            <App location={"info"} />
          )}/>


        </Switch>

      </BrowserRouter>
    )
  }
}



ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();

const Roster = () => (
  <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/portfolio' render={(props) => (
      <App location={"portfolio"} />
    )}/>
    <Route exact path='/about' render={(props) => (
      <App location={"about"} />
    )}/>
    <Route exact path='/hobbies' render={(props) => (
      <App location={"hobbies"} />
    )}/>
    <Route exact path='/information' render={(props) => (
      <App location={"info"} />
    )}/>

  </Switch>
)

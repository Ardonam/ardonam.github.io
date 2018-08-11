import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
      {/* onUpdate={() => window.scrollTo(0, 0)} */}
        <Switch>
          <Route exact path='/' component={App}/>
          {/*   onEnter={function(){
              document.getElementById("contact_id").scrollIntoView();
            }  */}

          {/* <Route path='/restaurant' component={Restaurant} />
           <Route path='/contact' component={Home} /> */}
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
    {/* <Route path='/restaurant' component={Restaurant} />
     <Route path='/contact' component={Home} /> */}
  </Switch>
)

import React, { Component } from 'react';
import createHistory from "history/createBrowserHistory";
import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
// import store from './store';
import ReduxDemo from './modules/reduxDemo.jsx';
import Parent from './modules/communication/parent.jsx';
import Higher from './modules/higher/demo.jsx';
import EventAgent from './modules/agent';
import Header from 'src/component/frame/header'; 
import Immutable from './modules/react/immutable';
import Transition from './modules/css3/transition';
import Animation from './modules/css3/animation';
import DocumentFargment from './modules/dom/documnetFragment';
import LifeCycle from './modules/react/lifecycle';
import ErrorComponent from './modules/errorComponent';
const style = require('./app.module.scss');
const history = createHistory()
 
class App extends Component {

  render() {
    return (
      // router
      <Router history={history}>
        <Header />
        <div className={style['index']}>
          <div className={style['index-nav']}>
            <ul>
              <li><Link to='/'>redux demo</Link></li>
              <li><Link to='/props'>component communication</Link></li>
              <li><Link to='/higher'>higher component</Link></li>
              <li><Link to='/eventagent'>Event Agent</Link></li>
              <li><Link to='/immutable'>immutable</Link></li>
              <li><Link to='/transiton'>transiton</Link></li>
              <li><Link to='/animation'>animation</Link></li>
              <li><Link to='/documentfargment'>documentfargment</Link></li>
              <li><Link to='/lifecycle'>lifecycle</Link></li>
            </ul>
          </div>
          <div className={style['index-body']}>
            <Switch>
              <Route exact={true} path='/' component={ReduxDemo} />
              <Route path='/props' component={Parent} />
              <Route path='/higher' component={Higher} />
              <Route path='/eventagent' component={EventAgent} />
              <Route path='/immutable' component={Immutable} />
              <Route path='/transiton' component={Transition} />
              <Route path='/animation' component={Animation} />
              <Route path='/documentfargment' component={DocumentFargment} />
              <Route path='/lifecycle' component={LifeCycle} />
              <Route path='/commonerror' component={ErrorComponent} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
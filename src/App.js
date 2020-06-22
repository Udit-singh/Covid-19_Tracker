import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter, Switch, Route , Redirect} from 'react-router-dom';
import Aarogya from './components/arogya';
import Country from './components/country'
import Header from './components/HeaderComponent';


function App () {
  return (
    <HashRouter>
      <div className='App'>
      <Header />
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/app' component={Aarogya} />
          <Route path='/country' component={Country} />
          <Redirect to="/" />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import App from '../../App';
import AddEvent from '../../components/AddEvent';

export default class AppRouter extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/create" component={AddEvent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
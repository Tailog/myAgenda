import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import App from '../../App';
import AddEvent from '../../components/AddEvent';
import EditEvent from '../../components/EditEvent';
import HeaderNav from '../../components/HeaderNav';

export default class AppRouter extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <HeaderNav/>
          <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/create" component={AddEvent} />
            <Route path="/edit/:id" component={EditEvent}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
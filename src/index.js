import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import Jobs from './components/jobs';
import Locations from './components/locations';
import OurCompany from './components/ourcompany';
import AboutUs from './components/aboutus';
import Navigation from './components/navigation';
import OurHistory from './components/ourhistory';
import OurServices from './components/ourservices';
import ContactUs from './components/contactus';




const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
       <Switch>
          <Route path="/index" component={Navigation} />
          <Route path="/ourcompany/ourservices" component={OurServices} />
          <Route path="/ourcompany/ourhistory" component={OurHistory} />
          <Route path="/ourcompany" component={OurCompany} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/locations" component={Locations} />
          <Route path="/contactus" component={ContactUs} />
       </Switch>  
      </div> 
      
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

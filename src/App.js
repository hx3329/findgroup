import React, { Component } from 'react';
import {  Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Security,ImplicitCallback} from "@okta/okta-react";


import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import LoginPage from './components/auth/LoginPage';

const config = {
    issuer: 'https://dev-315171.oktapreview.com/oauth2/default',
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id: '0oafy5doukXv4vJmd0h7'
}

class App extends Component {

    render(){
        return (
           // use the router to identify the url
           <Router>
               <Security issuer={config.issuer}
                         client_id={config.client_id}
                         redirect_uri={config.redirect_uri}
               >
                   <div className="App">
                     <div className="layout">
                         {/*add common in app*/}
                         <Layout />
                     </div>
                       <div className="container">
                           <Switch>
                               {/*use exact to identify homepage without /home*/}
                               <Route path="/" exact={true} component={HomePage} />
                               <Route path='/implicit/callback' component={ImplicitCallback}/>
                               <Route path="/about" component={AboutPage}/>
                               <Route path="/contact" component={ContactPage}/>
                               <Route path="/login" component={LoginPage}/>

                           </Switch>
                       </div>
                   </div>
               </Security>
           </Router>
        );
    }
}
export default App;
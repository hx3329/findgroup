import React, { Component } from 'react';
import {  Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Security,SecureRoute,ImplicitCallback} from "@okta/okta-react";


import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
// import LoginPage from './components/auth/LoginPage';
import Myprofile from "./components/pages/Myprofile";
import Group from "./components/group/Group";


// function onAuthRequired({ history}) {
//     history.push("/login");
// }

class App extends Component {
    //build server example
    state={users:[]}
    componentDidMount(){
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render(){
        return (
           // use the router to identify the url
           <Router>
               <Security
                   issuer="https://dev-783322.oktapreview.com/oauth2/default"
                   client_id="0oafzpuy0pvICjIhI0h7"
                   redirect_uri={window.location.origin + '/implicit/callback'}
                   // onAuthRequired={onAuthRequired}
               >
                   <div className="App">
                     <div className="layout">
                         {/*add common in app*/}
                         <Layout />
                         <h1>Users test server</h1>
                         <ul>
                             {this.state.users.map(user=>
                                 <li key={user.id}>{user.username}</li>
                             )}
                         </ul>
                     </div>
                       <div className="container">
                           <Switch>
                               {/*use exact to identify homepage without /home*/}
                               <Route path="/" exact={true} component={HomePage}/>
                               {/*<Route path="/login" render={()=><LoginPage*/}
                                      {/*baseUrl='https://dev-783322.oktapreview.com/oauth2/default'/>} />*/}
                               {/*<Route*/}
                                   {/*path="/login"*/}
                                   {/*render={() => (*/}
                                       {/*<LoginPage baseUrl="https://dev-783322.oktapreview.com" />*/}
                                   {/*)}*/}
                               {/*/>*/}
                               <Route path='/implicit/callback' component={ImplicitCallback}/>
                               <Route path="/about" component={AboutPage}/>
                               <SecureRoute path="/contact" component={ContactPage}/>
                               <SecureRoute path="/group" component={Group}/>
                               <SecureRoute path="/myprofile" component={Myprofile}/>
                           </Switch>
                       </div>
                   </div>
               </Security>
           </Router>
        );
    }
}
export default App;

import React, { Component } from 'react';
import {  Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';



class App extends Component {

    render(){
        return (
           // use the router to identify the url
           <Router>
               <div className="App">
                 <div className="layout">
                     {/*add common in app*/}
                     <Layout />
                 </div>
                   <Switch>
                       {/*use exact to identify homepage without /home*/}
                       <Route path="/" exact={true} component={HomePage} />
                       <Route path="/about" component={AboutPage}/>
                       <Route path="/contact" component={ContactPage}/>
                   </Switch>
               </div>
           </Router>
        );
    }
}
export default App;
import React, { Component } from 'react';
import {  Route, Switch, BrowserRouter as Router} from 'react-router-dom';

//import Layout from './components/common/Layout';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import Navigation from "./components/common/Navigation";
import Navigationdemo from "./components/common/Navigationdemo";


class App extends Component {

    render(){
        return (
           <Router>
               <div className="App">
                 <div className="layout">
                     <Navigationdemo />
                 </div>
                   <Switch>
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
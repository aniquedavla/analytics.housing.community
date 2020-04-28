import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Title from './Title';
import CommunityData from './CommunityData';
import WorkingTest from './WorkingTest';
import Dashboard from './Components/Dashboard';
// import Dashboard from './Dashboard';


class App extends Component {
  constructor(props){
        super(props)
        this.state = {
            communities:[],
            isLoaded:false
        }
  }

  componentDidMount(){
      fetch('http://my-json-server.typicode.com/aniquedavla/demo/communities')
          .then(response => response.json())
          .then(json => this.setState({
              communities: json,
              isLoaded: true
          }))
  }
  render(){
    let {isLoaded, communities} = this.state 
    if(isLoaded){
      return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={WorkingTest} exact />
              <Route path="/dashboard" component={Dashboard} exact />
            </Switch>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={WorkingTest} exact />
              <Route path="/dashboard" component={Dashboard} exact />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }
}
export default App;

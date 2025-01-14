import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Home from './components/Home';
import BeersList from './components/BeersList';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';
import Search from './components/Search';



class App extends React.Component {


  render(){
    return (
      <>
        <Switch>
          <Route exact path ="/home" component ={Home} />
          <Route path ="/beers-list" component ={BeersList} />
          <Route path ="/new-beer" component ={NewBeer} />
          <Route path ="/random-beer" component ={RandomBeer} />
          <Route path="/beer-details/:beerId" component={BeerDetails}/>
        </Switch>
      </>
    );
  }
  
  }
  
export default App;

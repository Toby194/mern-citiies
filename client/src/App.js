import React from 'react';
import './App.css';
import { Redirect, Router, Link } from '@reach/router';
import AllCities from './views/AllCities';
import NewCity from './views/NewCity';
import SingleCity from './views/SingleCity';
import EditCity from './views/EditCity';

function App() {
  return (
    <div className="App">
      <Link to = "/cities">All Cities</Link>{' '}
      <Link to = "/cities/new">Create a City</Link>
      <Router>
        <AllCities path = "cities" />
        <NewCity path = "cities/new" />
        <SingleCity path="cities/:id" />
        <EditCity path="cities/:id/edit" />
        <Redirect
          from = "/"
          to = "/cities"
          noThrow
        />
      </Router>
    </div>
  );
}

export default App;

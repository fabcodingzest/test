import React from 'react';
import { Switch, Route } from 'react-router-dom'
import SearchButton from './components/searchButton';
import * as BsIcons from 'react-icons/bs';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Theme from './pages/Theme';
import OwnQuote from './pages/OwnQuote';
import './App.css';

const App = () => {

  const ModeButton = () => (
    <button className="mode">
      <BsIcons.BsSun size="28" />
    </button>
  )

  return (
    <>
      <ModeButton />
      <SearchButton />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/theme' component={Theme} />
        <Route path='/own-quote' component={OwnQuote} />
      </Switch>
    </>
  );
};

export default App;

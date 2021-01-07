import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Theme from './pages/Theme';
import OwnQuote from './pages/OwnQuote';
import { BsSun } from 'react-icons/bs';

const App = () => {

  const ModeButton = () => (
    <button className="mode">
      <BsSun size="28" />
    </button>
  )

  return (
    <>

      <ModeButton />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' component={Search} />
        <Route path='/search' component={Favorites} />
        <Route path='/search' component={Theme} />
        <Route path='/search' component={OwnQuote} />
      </Switch>
    </>
  );
};

export default App;

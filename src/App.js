import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AuthorQuotes from './pages/AuthorQuotes';
import './App.css';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/author/:authorName" exact component={AuthorQuotes} />
      </Switch>
    </>
  );
};

export default App;

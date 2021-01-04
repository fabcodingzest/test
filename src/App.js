import React, { useState } from 'react';
import './App.css';
import quotes from './data/quotes';
import MenuButton from './components/menuButton';
import ModeButton from './components/modeButton';
import Quote from './components/quote';

const App = () => {
  return (
    <>
      <ModeButton />
      <MenuButton />
      <Quote quotes={quotes} />
    </>
  );
};

export default App;

import React from 'react';
import './Menu.css';
import { BsSearch, BsHeartFill } from 'react-icons/bs';
import { CgNotes, CgMenuGridR } from 'react-icons/cg';
import { FaPaintBrush } from 'react-icons/fa';

const Menu = () => {
  const number = 12;
  return (
    <div className="show-menu">
      <button className="menu-buttons search-button">
        <BsSearch className="icon" /> Search
      </button>
      <button className="menu-buttons">
        <CgNotes className="icon" /> Add Your Own
      </button>
      <button className="menu-buttons">
        <BsHeartFill className="icon" /> Favorites({number}){' '}
      </button>
      <button className="menu-buttons">
        <CgMenuGridR className="icon" /> Categories
      </button>
      <button className="menu-buttons">
        <FaPaintBrush className="icon" /> Theme
      </button>
    </div>
  );
};

export default Menu;

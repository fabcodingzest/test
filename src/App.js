import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as SiIcons from 'react-icons/si';
import * as CgIcons from 'react-icons/cg';
import * as FaIcons from 'react-icons/fa';
import * as GoIcons from 'react-icons/go';
import './App.css';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="quote-container">
          <div className="quote">
            <div className="quote-bar"></div>
            <div className="quote-text">
              <GoIcons.GoQuote size="30" />
              <h1 className="text">
                By going beyond your own problems and taking care of others, you
                gain inner strength, self-confidence, courage, and a greater
                sense of calm
              </h1>
              <div className="author-info">
                <h4 className="author">Dalai Lama</h4>
                <h4 className="genre">Business</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-container">
          <div className="modes">
            <BsIcons.BsSun className="darkmode" size="30" />
            <div className="favorites">
              <FaIcons.FaHandPointRight size="24" />
              <button className="favorite">
                Favorites <span>(12)</span>
              </button>
            </div>
          </div>
          <div className="share-twitter">
            <SiIcons.SiTwitter className="twitter-icon" size="32" />
          </div>
          <div className="next-quote">
            <button className="next">Next Quote</button>
            <CgIcons.CgArrowLongRight size="25" className="next-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

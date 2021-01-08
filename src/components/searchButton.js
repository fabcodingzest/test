import React, { useState } from 'react';
import quotes from '../data/quotes';

const Test = () => {
  const [catalogue, setCatalogue] = useState(false);
  const [inputName, setInputName] = useState('hi');

  const authors = [...new Set(quotes.map((quote) => quote.author))];

  const showAuthors = (event) => {
    setCatalogue(true);
    setInputName(event.target.value);
  };

  const filterAuthors = () => {
    const filtered = [];

    authors.filter((author) => {
      if (
        author !== null &&
        author !== '' &&
        author.toLowerCase().includes(inputName.toLowerCase())
      ) {
        filtered.push(author);
      }
    });
    return filtered;
  };

  const filteredAuthors = filterAuthors();

  const handleClick = () => {
    setCatalogue(false);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-button"
        placeholder="Search By Author"
        onChange={showAuthors}
      />
      <div
        className={catalogue ? 'author-catalogue' : 'author-catalogue-inactive'}
      >
        {filteredAuthors.length < 11 ? (
          filteredAuthors.map((author, index) => {
            return (
              <button className="author-button" key={index}>
                {author}
              </button>
            );
          })
        ) : (
          <>
            <button className="author-button">{filteredAuthors[0]}</button>
            <button className="author-button">{filteredAuthors[1]}</button>
            <button className="author-button">{filteredAuthors[2]}</button>
            <button className="author-button">{filteredAuthors[3]}</button>
            <button className="author-button">{filteredAuthors[4]}</button>
            <button className="author-button">{filteredAuthors[5]}</button>
            <button className="author-button">{filteredAuthors[6]}</button>
            <button className="author-button">{filteredAuthors[7]}</button>
            <button className="author-button">{filteredAuthors[8]}</button>
            <button className="author-button">{filteredAuthors[9]}</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Test;

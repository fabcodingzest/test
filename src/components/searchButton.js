import React, { useState } from 'react';
import quotes from '../data/quotes';
import Dropdown from './dropDown';
import DropdownButton from './dropDownButton';

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

  const handleClick = (event) => {
    const authorName = event.target.getAttribute('value');
    const authorsQuotes = quotes.filter((quote) => quote.author === authorName);
    console.log(authorsQuotes);
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
              <DropdownButton
                author={author}
                index={index}
                clickHandler={handleClick}
              />
            );
          })
        ) : (
          <>
            <Dropdown filtered={filteredAuthors} clickHandler={handleClick} />
          </>
        )}
      </div>
    </div>
  );
};

export default Test;

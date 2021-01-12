import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as BsIcons from 'react-icons/bs';
import * as SiIcons from 'react-icons/si';
import * as CgIcons from 'react-icons/cg';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/md';
import './Home.css'

const Quote = () => {

    const [randomQuote, setRandomQuote] = useState({
        data: [
            {
                quoteText:
                    'I think the thing we see is that as people are using video games more, they tend to watch passive TV a bit less. And so using the PC for the Internet, playing video games, is starting to cut into the rather unbelievable amount of time people spend watching TV.',
                quoteAuthor: 'Bill Gates',
                quoteGenre: 'business',
            },
        ],
    });

    const nextQuote = () => {
        try {
            fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
                .then((response) => response.json())
                .then((data) => {
                    setRandomQuote(data);
                });
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    const generateAuthorSlug = (authorName) => authorName.toLowerCase().split(' ').join('-')

    const fullQuote = {
        author: randomQuote.data[0].quoteAuthor,
        text: randomQuote.data[0].quoteText,
        genre: randomQuote.data[0].quoteGenre,
        slug: generateAuthorSlug(randomQuote.data[0].quoteAuthor)
    };

    console.log(fullQuote.slug);
    return (

        <div className="container">
            <div className="quote-container">
                <div className="quote">
                    <div className="quote-bar"></div>
                    <div className="quote-text">
                        <GoIcons.GoQuote size="30" />
                        <h1 className="text">{fullQuote.text}</h1>
                        <Link to={"/author/" + fullQuote.slug} className="author-link">
                            <div className="author-info">
                                <h4 className="author">{fullQuote.author}</h4>
                                <h4 className="genre">{fullQuote.genre}</h4>
                                <div className="touch-icon">
                                    <CgIcons.CgArrowLongRight size="25" className="right-arrow" />
                                    <MdIcons.MdTouchApp size="28" className="point-icon" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="feature-container">
                <div className="modes">
                    <BsIcons.BsSun className="darkmode" size="30" />
                </div>
                <div className="share-twitter">
                    <SiIcons.SiTwitter className="twitter-icon" size="32" />
                </div>
                <div className="next-quote" onClick={nextQuote}>
                    <button className="next" >Next Quote</button>
                    <CgIcons.CgArrowLongRight size="25" className="next-icon" />
                </div>
            </div>
        </div>
    )
}

export default Quote;
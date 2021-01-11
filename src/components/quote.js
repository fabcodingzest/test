import React, { useEffect, useState } from 'react'
import * as BsIcons from 'react-icons/bs';
import * as SiIcons from 'react-icons/si';
import * as CgIcons from 'react-icons/cg';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/md';
import './quote.css'
import axios from 'axios';

const Quote = () => {

    const [randomQuote, setRandomQuote] = useState({
        data: [
            {
                quoteText: "I think the thing we see is that as people are using video games more, they tend to watch passive TV a bit less. And so using the PC for the Internet, playing video games, is starting to cut into the rather unbelievable amount of time people spend watching TV.",
                quoteAuthor: "Bill Gates",
                quoteGenre: 'business'
            }
        ]
    })
    const [quote, setQuote] = useState(null)

    useEffect(() => {
        axios
            .get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
            .then(response => {
                setQuote(response.data)
            })
    }, [])

    const nextQuote = () => {
        setRandomQuote(quote)
        console.log(randomQuote);
    }


    return (

        <div className="container">
            <div className="quote-container">
                <div className="quote">
                    <div className="quote-bar"></div>
                    <div className="quote-text">
                        <GoIcons.GoQuote size="30" />
                        <h1 className="text">{randomQuote.data[0].quoteText}</h1>
                        <div className="author-info">
                            <h4 className="author">{randomQuote.data[0].quoteAuthor}</h4>
                            <h4 className="genre">{randomQuote.data[0].quoteGenre}</h4>
                            <div className="touch-icon">
                                <CgIcons.CgArrowLongRight size="25" className="right-arrow" />
                                <MdIcons.MdTouchApp size="28" className="point-icon" />
                            </div>
                        </div>
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
                <div className="next-quote">
                    <button className="next" onClick={nextQuote}>Next Quote</button>
                    <CgIcons.CgArrowLongRight size="25" className="next-icon" />
                </div>
            </div>
        </div>
    )
}

export default Quote;
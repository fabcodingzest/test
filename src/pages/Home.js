import React, { useEffect, useState } from 'react'
import QuoteText from '../components/QuoteText'
import Features from '../components/Features'
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

    useEffect(nextQuote, [])

    const generateAuthorSlug = (authorName) => authorName.toLowerCase().split(' ').join('-')

    const fullQuote = {
        author: randomQuote.data[0].quoteAuthor,
        text: randomQuote.data[0].quoteText,
        genre: randomQuote.data[0].quoteGenre,
        slug: generateAuthorSlug(randomQuote.data[0].quoteAuthor)
    };

    return (

        <div className="container">
            <QuoteText
                quoteText={fullQuote.text}
                quoteAuthor={fullQuote.author}
                quoteGenre={fullQuote.genre}
                quoteSlug={fullQuote.slug}
            />
            <Features quoteHandler={nextQuote} />
        </div>
    )
}

export default Quote;
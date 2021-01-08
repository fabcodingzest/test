import React, { useState } from 'react'
import quotes from '../data/quotes'
import Quote from '../components/Quote'


const Home = () => {

    const [randomNumber, setRandomNumber] = useState(0)
    const nextQuote = () => {
        const generateRandomNumber = () => Math.floor(Math.random() * quotes.length);
        const random = generateRandomNumber();
        setRandomNumber(random)
    }

    return (
        <Quote quotes={quotes} randomNumber={randomNumber} clickHandler={nextQuote} />
    )
}

export default Home
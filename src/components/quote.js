import React, { useState } from 'react'
import { BsHeart } from 'react-icons/bs';
import { AiFillForward } from 'react-icons/ai';
import { HiShare } from 'react-icons/hi';


const Quote = ({ quotes }) => {

    const [randomNumber, setRandomNumber] = useState(0)

    const nextQuote = () => {
        const generateRandomNumber = () => Math.floor(Math.random() * 15);
        const random = generateRandomNumber();
        setRandomNumber(random)
    }
    return (
        <>
            <div className="container">
                <div className="quote-container">
                    <h2 className="quote">{quotes[randomNumber].quote}</h2>
                    <h4 className="author">{quotes[randomNumber].author}</h4>
                </div>
            </div>

            <div className="buttons-container">
                <div className="buttons">
                    <button className="share">
                        <HiShare size="30" />
                    </button>
                    <button className="heart">
                        <BsHeart size="30" />
                    </button>
                    <button className="forward" onClick={nextQuote}>
                        <AiFillForward size="40" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Quote
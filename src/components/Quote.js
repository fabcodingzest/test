import React from 'react'
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import './quote.css'


const Quote = ({ quotes, randomNumber, clickHandler }) => {
    return (
        <div className="container">
            <div className="main-quote-container">
                <div className="quote-container">
                    <h2 className="quote">{quotes[randomNumber].text}</h2>
                    <h4 className="author"> - {quotes[randomNumber].author}</h4>
                </div>
            </div>

            <div className="buttons-container">
                <div className="buttons">
                    <button className="share">
                        <HiIcons.HiShare size="30" />
                    </button>
                    <button className="heart">
                        <BsIcons.BsHeart size="30" />
                    </button>
                    <button className="forward" onClick={clickHandler}>
                        <AiIcons.AiFillForward size="40" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Quote
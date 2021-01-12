import React from 'react'

const Quote = ({ quoteText }) => {
    return (
        <>
            <div className="quotes">
                <div className="cat-quote-bar"></div>
                <div className="quote-text">
                    {quoteText}
                </div>
            </div>
        </>
    )
}

export default Quote
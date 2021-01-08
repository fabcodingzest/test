import React from 'react'
import DropDown from './dropDown'

const DropdownButton = ({ author, index, clickHandler }) => {
    return (
        <>
            <button
                className="author-button"
                value={author}
                key={index}
                onClick={clickHandler}
            >
                {author}
            </button>
        </>
    )
}

export default DropdownButton
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu from './Menu'

const MenuButton = () => {

    const [showMenu, setShowMenu] = useState(false)

    const menuShow = {
        showMenu: {
            color: 'blue',
            position: 'absolute',
            top: '70px',
            right: '80px',

            width: '200px',
            height: '250px',
            background: 'rgb(190, 179, 179)',

            borderRadius: '8px',
            opacity: '1',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },

        menuButtons: {
            border: 'none',
            outline: 'none',
            background: 'none',
            width: '80%',
            padding: '10px',
        },

        searchButton: {
            fontFamily: 'Arial',
        },

        icon: {
            position: 'relative',
            left: '-5px',
            top: '2px',
        }
    }

    const displayMenu = () => {
        console.log('Working');
        if (!showMenu) {
            <Menu />
            setShowMenu(true)
        }
    }

    return (
        <button className="menu" onClick={displayMenu} >
            <GiHamburgerMenu size="28" />
        </button >
    )
}


export default MenuButton
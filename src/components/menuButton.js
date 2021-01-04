import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu from './menu'



const MenuButton = () => {

    const toggleMenu = () => {
        console.log('Working');
        <Menu />
    }
    return (

        <button className="menu" onClick={toggleMenu} >
            <GiHamburgerMenu size="28" />
        </button >
    )
}


export default MenuButton
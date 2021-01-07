import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as FaIcons from 'react-icons/fa';


const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Search',
        path: '/search',
        icon: <BsIcons.BsSearch />,
        cName: 'nav-text'
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <BsIcons.BsHeartFill />,
        cName: 'nav-text'
    },
    {
        title: 'Theme',
        path: '/theme',
        icon: <FaIcons.FaPaintBrush />,
        cName: 'nav-text'
    },
    {
        title: 'Add Your Own',
        path: '/add-own',
        icon: <CgIcons.CgNotes />,
        cName: 'nav-text'
    }
]

export default SidebarData 
import React from 'react'
import { Link } from 'react-router-dom';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]

export default function Navigation() {
    return (
        <nav className="site-navigation">
            <span className="menu-title"> Nuvolum Code Test</span>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

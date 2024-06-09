import React from 'react';
import './Header.css';

function Header () {
    return (
        <header className='header'>
            <nav className='navbar'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Project">Project</a></li>
                    <img className="image" src={process.env.PUBLIC_URL + '/logo-big-brain-base-png.png'} alt="logo" />
                    <li><a href="/about">About us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
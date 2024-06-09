import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#040404', padding: '20px', textAlign: 'center', color: 'white' }}>
            <img className="image" src={process.env.PUBLIC_URL + '/logo-big-brain-base-png.png'} alt="logo" />
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                    <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
                    <li><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a></li>
                    <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
                </ul>
            </nav>
            <p style={{ color: 'white' }}>© 2024 Big Brain. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
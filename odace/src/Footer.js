import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#040404', textAlign: 'center', color: 'white', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div>
                    {/* <img className="image" src={process.env.PUBLIC_URL + '/logo-big-brain-base-png.png'} alt="logo" /> */}
                </div>
                <div>
                    <nav style={{fontSize: '18px'}}>
                        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}>
                            <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                            <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>Project</a></li>
                            <li><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a></li>
                            <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
                        </ul>
                    </nav>
                    <div>
                        <a href="https://www.facebook.com" style={{ color: 'white', marginRight: '10px' }}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        <a href="https://www.twitter.com" style={{ color: 'white', marginRight: '10px' }}><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        <a href="https://www.instagram.com" style={{ color: 'white' }}><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                        <a href="https://www.linkedin.com" style={{ color: 'white', marginLeft: '10px' }}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                    </div>
                    <p style={{ color: 'white', textAlign:'center', marginRight:'25px'}}>© 2024 Big Brain. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
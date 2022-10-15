import React from 'react';
import './style.css';

export default function Footer() {
    return (
        <>
            <footer className='footer-divs'>
                <div className='div-footer'>
                    <div className='footer-title'>
                        Your Logo
                    </div>
                    <div className='copy-div'>
                        <div className='copyright'>
                            ©  2021  Company Name
                            All rights reserved
                        </div>
                    </div>
                </div>
                <div className='navigation'>
                    <nav>
                        <ul className='nav-list2'>
                            <li><a href='#'>Explore</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Cities</a></li>
                        </ul>
                    </nav>
                    <div className='nav-btn'>
                        <a className='button2' href='#'>Call</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

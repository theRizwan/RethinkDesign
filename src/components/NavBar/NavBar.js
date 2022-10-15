import React from 'react';
import './style.css';

export default function NavBar() {
    return (
        <>
            <header className='header'>
                <div className='site-title'>
                   Your Logo
                </div>
                <div className='navigation'>
                    <nav>
                        <ul className='nav-list'>
                            <li><a href='#'>Explore</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Cities</a></li>
                        </ul>
                    </nav>
                    <div className='nav-btn'>
                        <a className='button' href='#'>Call</a>
                    </div>
                </div>
            </header>

        </>
    )
}

 /* eslint-disable */
import React from 'react';
import { ALL_RIGHTS, COMPANY_NAME, YOUR_LOGO } from '../../constants/constants';
import './style.css';

export default function Footer() {
    return (
        <>
            <footer className='header1'>
                <nav className='headnav1'>
                    <label className='logo1' style={{ color: 'black' }}>{YOUR_LOGO}</label>


                    <ul className='navul1'>
                        <li className='navli1'><a href='#' style={{ color: 'black' }} className='exo navanchor1'>Explore</a></li>
                        <li className='navli1'><a href='#' style={{ color: 'black' }} className='exo navanchor1'>About Us</a></li>
                        <li className='navli1'><a href='#' style={{ color: 'black' }} className='exo navanchor1'>Cities</a></li>
                        <li className='navli1'><a href='#' style={{ color: 'black' }} className='exo navanchor1'>Call</a></li>
                    </ul>
                </nav>
                <div className='register'>
                    <p className='copy'>{COMPANY_NAME}</p>
                    <p className='rights'>{ALL_RIGHTS}</p>
                </div>
            </footer>
        </>
    )
}

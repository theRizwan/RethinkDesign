 /* eslint-disable */
import React, { useRef } from 'react';
import { YOUR_LOGO } from '../../constants/constants';
import './style.css';

export default function NavBar() {
    const ref = useRef()
    const handleClick= () => {
        ref.current.click()
    }
    return (
        <>
            <header className='header'>
                <nav className='headnav'>
                    <input ref={ref} type={'checkbox'} id='check' />
                    <label htmlFor='check' className='checkbtn'>
                    <i className="fa fa-bars"></i>

                    </label>
                    <label className='logo'>{YOUR_LOGO}</label>
                    <ul className='navul'>
                        <li className='navli'><a onClick={handleClick} href='#Second' className='exo navanchor'>Explore</a></li>
                        <li className='navli'><a onClick={handleClick} href='#Third' className='exo navanchor'>About Us</a></li>
                        <li className='navli'><a onClick={handleClick} href='#Fourth' className='exo navanchor'>Cities</a></li>
                        <li className='navli'><a onClick={handleClick} href='#' className='exo navanchor btn-1'>Call</a></li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

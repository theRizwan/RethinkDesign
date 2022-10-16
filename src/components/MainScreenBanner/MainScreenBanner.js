import React from 'react';
import CustomInput from '../CustomInput/CustomInput';
import SearchButton from '../SearchButton/SearchButton';
import './style.css';

export default function MainScreenBanner() {
    return (
        <>

            <div className="container-banner">
                <div className='main-banner-img'>
                    <img
                        src="/assets/MainBanner.png"
                        alt="Main Banner"
                        className="main-banner"
                    />
                </div>
                <div className='main-banner-heading-container'>
                    <h1 className='main-banner-heading'>
                        Rethink your living & renting
                    </h1>
                </div>
                <div className='main-banner-secondary-heading-container'>
                    <h4 className='main-banner-secondary-heading'>Make your stay painless with us</h4>
                </div>
                <div className='center-container'>
                    <div className='search-container width-container'>
                        <CustomInput label='CITY' placeholder='Select your city' />
                        <CustomInput label='DATES' placeholder='Select your dates' />
                        <CustomInput label='GUESTS' placeholder='add guests' />
                        <SearchButton />
                    </div>
                </div>
                <div className='godown-icon center-container'>
                    <img
                        src="/assets/image2112-dlh7-200h.png"
                        alt="pexelsmaxvakhtbovych59980511156"
                        className="godown"
                    />
                </div>
            </div>
        </>
    )
}

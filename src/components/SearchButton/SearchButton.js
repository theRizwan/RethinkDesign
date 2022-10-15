import React from 'react'
import './style.css';

export default function SearchButton() {
    return (
        <div>
            <button className='search-btn'>
                <img
                    src="/assets/searchsolid1123-hdw.svg"
                    alt="searchsolid1123"
                    className="search-icon"
                />Search
            </button>
        </div>
    )
}

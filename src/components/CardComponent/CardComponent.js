import React from 'react'
import './style.css'

export default function CardComponent(props) {
    return (
        <>
            <div className='image-div'>
                <img className="image-card" src={props.src} />
                <div className='search-container1'>
                    <p className=''>{props.msg}</p>
                    <div className='card-btn-group'>
                    <button className='btn-gradient' style={{width:'31', height:'20'}}>{props.firstBtn}</button>
                    <button className='btn-gradient' style={{width:'80', height:'30'}}>{props.secondBtn}</button>
                    <button className='btn-gradient' style={{width:'100', height:'51'}}>{props.thirdBtn}</button>
                    </div>
                </div>
            </div>
        </>

    );
}

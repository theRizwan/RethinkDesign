import React from 'react'

export default function CardWithChapter(props) {
    return (
        <>
            <div className='image-div'>
                <img className="image-card" width={props.width} height={props.height} src={props.src} />
                <div className='search-container1'>
                    <h3>{props.chapter}</h3>
                    <p className=''>{props.msg}</p>
                </div>
            </div>
        </>
    )
}

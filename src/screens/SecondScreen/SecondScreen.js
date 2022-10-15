import React from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import "./style.css"
export default function SecondScreen() {
    return (
        <>
            <div className='second-head'>
                <span className="second-heading">
                    <span>Explore</span>
                </span>

            </div>
            <div>
                <div className='second-subhead'>
                    From one guests rooms to penthouses with pools and gardens
                </div>
            </div>
            <div className='card-group'>
                <CardComponent
                    src="/assets/Explore1.jpg"
                    firstBtn={'32$'}
                    thirdBtn={'Book!'}
                    secondBtn={'28M'}
                    msg='Room with one king-size bed'
                />
                <CardComponent
                    src="/assets/Explore2.jpg"
                    firstBtn={'2039$'}
                    secondBtn={'483M'}
                    thirdBtn={'Book!'}
                    msg='Penthouse for 8 person'
                />
            </div>
        </>
    )
}

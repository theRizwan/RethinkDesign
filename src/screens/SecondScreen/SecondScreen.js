import React from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import { SECOND_MESSAGE } from '../../constants/constants'
import "./style.css"
export default function SecondScreen() {
    return (
        <>
            <div className='second-head' id='Second'>
                <span className="second-heading">
                    <span>Explore</span>
                </span>

            </div>
            <div>
                <div className='second-subhead'>
                    {SECOND_MESSAGE}
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

import React from 'react'
import CardWithChapter from '../../components/CardWithChapter/CardWithChapter'
import './style.css';

export default function ThirdScreen() {
    return (
        <>
            <div className='second-head'>
                <span className="second-heading">
                    <span>About Us</span>
                </span>

            </div>
            <div>
                <div className='second-subhead'>
                    Allow us to tell you a short story...
                </div>
            </div>
            <div className='card-group'>
                <CardWithChapter
                    src="/assets/AboutUS1.png"
                    chapter={'Chapter I'}
                    width={400}
                    height={267}
                    msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun'
                />
                <CardWithChapter
                    src="/assets/AboutUS2.png"
                    chapter={'Chapter II'}
                    width={500}
                    height={334}
                    msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun'
                />
            </div>
            <div className='card-group'>
                <div className='up-card'>

                    <CardWithChapter
                        src="/assets/AboutUS3.png"
                        chapter={'Chapter III'}
                        width={400}
                        height={502.58}
                        msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun'
                    />
                </div>
                <div className='down-card' style={{marginBottom: "360px"}}>
                    <CardWithChapter
                        src="/assets/AboutUS4.png"
                        chapter={'Chapter IV'}
                        width={500}
                        height={500}
                        msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun'
                    />
                </div>
            </div>
        </>
    )
}

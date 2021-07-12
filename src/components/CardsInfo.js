import React from 'react'


export default function CardsInfo(props) {
    return (
        <div className='cardsContainer'>

                <img src={props.src} alt="" />
                <h2>{props.title}</h2>
                <p>{props.subTitle}</p>

        </div>
    )
}

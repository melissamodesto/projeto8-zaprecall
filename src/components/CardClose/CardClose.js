import React from 'react'
import CardsQuestion from '../CardQuestion/CardQuestion'
import styleCardQuestion from '../CardQuestion/styleCardQuestion.css'
import Deck from '../Deck'
import './styleCardClose.css';

function CardsClose(card) {
    return (
        <div className='deck'> 
            <div className='card-closed'>
                <h2 className={card.status}>Flashcard {card.number}</h2>
                <ion-icon name={card.icon}></ion-icon>
            </div>
        </div>
    )
}



export default function CardClose(card) {

    if (card.status === 'answer-dont-remember') {

        return (
            <>
                <CardsClose status={card.status} icon="close-circle" number={card.number} />
            </>
        )
    } else if (card.status === 'answer-almost') {

        return (
            <>
                <CardsClose status={card.status} icon="help-circle" number={card.number} />
            </>
        )
    } else {
            
        return (
            <>
                <CardsClose status={card.status} icon="checkmark-circle" number={card.number} />
            </>
        )
    }
}

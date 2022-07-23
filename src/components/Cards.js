import React from 'react'
import CardsQuestion from './CardQuestion/CardQuestion'
import styleCardQuestion from './CardQuestion/styleCardQuestion.css'
import Deck from './Deck'

export default function Cards(card) {

    const [cardClosed, setCardClosed] = React.useState(true)

    return (
        cardClosed ?
            <>
            <div className='deck'> 
                <div className='card-closed' onClick={() => setCardClosed(false)}>
                    <h2>Flashcard {card.number}</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
            </> : (
                <>
                    <CardsQuestion question={card.question} answer={card.answer} />
                </>
            )
    )
}

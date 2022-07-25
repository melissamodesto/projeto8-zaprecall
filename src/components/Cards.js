import React from 'react'
import CardsQuestion from './CardQuestion/CardQuestion'

export default function Cards(card) {

    const [cardClosed, setCardClosed] = React.useState(true)

    let number = card.number + 1;
   
    return (
        cardClosed ?
            <>
            <div className='deck'> 
                <div className='card-closed' onClick={() => setCardClosed(false)}>
                    <h2>Flashcard {number}</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
            </> : (
                <>
                    <CardsQuestion question={card.question} answer={card.answer} deck={card.deck}/>
                </>
            )
    )
}

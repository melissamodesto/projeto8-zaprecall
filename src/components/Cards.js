import React from 'react'

export default function Cards(card) {

    const [cardClosed, setCardClosed] = React.useState(true)

    return (
        cardClosed ?
            <>
                <div className='card-closed' onClick={() => setCardClosed(false)}>
                    <h2>Pergunta {card.number}</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </> : (
                <>
                    <h1>Hello</h1>
                </>
            )
    )
}
import React from 'react'
import Footer from '../SecondFooter/SecondFooter';
import './styleCardClose.css';


function CardsClose(card) {

    return (
        <div className='deck'> 
            <div className='card-closed'>
                <h2 className={card.status}>Flashcard {card.number}</h2>
                <ion-icon className={card.status} name={card.icon}></ion-icon>
            </div>
        </div>
    )
}


export default function CardClose(card) {

    if (card.status === 'answer-dont-remember') {

        return (
            <>
                <CardsClose status={card.status} icon='close-circle' number={card.number} />
                <Footer deck={card.deck} icon='1' number={card.number} status='answer-dont-remember'/>
            </>
        )
    } else if (card.status === 'answer-almost') {

        return (
            <>
                <CardsClose status={card.status} icon='help-circle' number={card.number} />
                <Footer deck={card.deck} icon='2' number={card.number} status='answer-almost'/>
            </>
        )
    } else if (card.status === 'answer-zap') {
            
        return (
            <>
                <CardsClose status={card.status} icon='checkmark-circle' number={card.number} />
                <Footer deck={card.deck} icon='3' number={card.number} status='answer-zap'/>
            </>
        )
    }
}

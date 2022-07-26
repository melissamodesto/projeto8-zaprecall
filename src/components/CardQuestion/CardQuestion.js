import React from 'react';
import setinha from './setinha.png';
import CardAnswer from '../CardAnswer/CardAnswer';
import './styleCardQuestion.css';


export default function CardsQuestion(card) {
    
    const [cardQuestion, setCardQuestion] = React.useState(true)

    return (
        cardQuestion ?
            <div className='card-question'>
                <div className='question'>
                   {card.question}
                </div> 
                <img onClick={() => setCardQuestion(!cardQuestion)} src={setinha}/>
            </div> : (
                <CardAnswer question={card.question} answer={card.answer} number={card.numberCards} deck={card.deck}/>
                )
    )
}


import React from 'react';
import Deck from '../Deck';
import CardClose from '../CardClose/CardClose';

export default function CardAnswer (card) {
    
    const [cardClose, setCardClose] = React.useState(false)
    
    return (
        !cardClose ?
            <div className='deck'> 
                <div className='card-answer'>
                    <div className='question'>
                        {card.answer}
                    </div>
                    <div className='button-answer'>
                        <div className='answer-dont-remember' onClick={() => setCardClose('answer-dont-remember')}>Não lembrei</div>                        
                        <div className='answer-almost' onClick={() => setCardClose('answer-almost')}>Quase não lembrei</div>                        
                        <div className='answer-zap' onClick={() => setCardClose('answer-zap')}>Zap!</div>  
                    </div> 
                </div>
            </div> : (
                <CardClose status={cardClose} question={card.question} answer={card.answer} />
            )
    )
}
import React from "react";
import Message from "../Message/Message";
import './styleSecondFooter.css';

let score = 0;
let array = [];
let incorrect = false;

function RenderIcon(answer) {
    if(answer.icon === "1"){
        return (
            <>
                <ion-icon class={'answer-dont-remember'} name="close-circle"></ion-icon>
            </>
        )
    }if(answer.icon === "3"){
        return (
            <>
                <ion-icon class='answer-zap' name="checkmark-circle"></ion-icon>
            </>
        )
    }
    if(answer.icon === "2"){
        return (
            <>
                <ion-icon class='answer-almost' name="help-circle"></ion-icon>
            </>
        )
    }
}

function RenderFooter(score) {
    
    let scoreDeck = score.deck;

    array = [...array,score.icon];
    
    return (
        <div className="second-footer">
            <div className="icons">
                {array.map((answer, index) => <RenderIcon icon={answer} key={index}/>)}
            </div>
            <>{score.score}/{scoreDeck} CONCLUÍDOS</>
        </div>
    )
}

export default function Footer(card) {
    score = score + 1;
    if(card.icon === "1"){
        incorrect = true;
        console.log(incorrect);
    
    }
    if(score < card.deck){

        return (
            <RenderFooter score={score} deck={card.deck} icon={card.icon}/>
        )
    }
    else{

        return (
            <>
                <Message status={incorrect} />
                <RenderFooter score={score} deck={card.deck} icon={card.icon}/>
            </>
        )
    }

}
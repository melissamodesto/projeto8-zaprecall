import Footer from './Footer'
import Cards from './Cards'

const cards = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        question: "O React é __ ",
        answer: "Uma biblioteca JavaScript para construção de interfaces"
    },
    {
        question: "Componentes devem iniciar com __ ",
        answer: "Letra maiúscula"
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "Expressões"
    },
    {
        question: "O ReactDOM nos ajuda __ ",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        question: " Usamos o npm para __  ",
        answer: " Usamos o npm para __ "
    },
    {
        question: "Usamos props para __ ",
        answer: "passar diferentes informações para componentes"
    },
    {
        question: "Usamos estado (state) para __ ",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    },
    {
        question: "Usamos estado (state) para __ ",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    },
    {
        question: "Usamos estado (state) para __ ",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    },
    {
        question: "Usamos estado (state) para __ ",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }]

export default function Deck() {

    let numberCards = 1;
    let deck = cards.length;

    return (
        <>
            {cards.map(card => <Cards question={card.question} answer={card.answer} number={numberCards++} deck={deck} />)}
            <Footer deck={deck} />
        </>
    )
}
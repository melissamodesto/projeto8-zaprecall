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
        answer: "Interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        question: " Usamos o npm para __  ",
        answer: "Usamos o npm para __ "
    },
    {
        question: "Usamos props para __ ",
        answer: "Passar diferentes informações para componentes"
    },
    {
        question: "Usamos estado (state) para __ ",
        answer: "Dizer ao React quais informações devem ser renderizadas na tela quando atualizadas"
    }]

export default function Deck() {

    let numberCards = 0;
    let shuffleCards = cards.sort(() => Math.random() - 0.5);
    let showCards = shuffleCards.slice(4);
    let deck = showCards.length;
    
    return (
        <>
            {showCards.map((card, index) => <Cards question={card.question} answer={card.answer} number={numberCards++} deck={deck} key={index}/>)}
            <Footer number={numberCards} />
        </>
    )
}
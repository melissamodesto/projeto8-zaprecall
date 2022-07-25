import './styleMessage.css'

export default function Message(status) {
    if(status.status === true){
        return (
            <div className="message">
                <h2>😅 Putz...</h2>
                <p>Ainda faltam alguns...
                Mas não desanime!</p>
            </div>
        )
    }else{
        return (
            <div className="message">
                <h2>😎 Parabéns!</h2>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </div>
        )
    }
} 
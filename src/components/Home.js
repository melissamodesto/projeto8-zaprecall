import React from 'react'
import StartRecall from './StartRecall'

function ScreenOne() {

    const [start, setStart] = React.useState(true);

    return (
        start ?
            <>
                <div className="initial-screen">
                    <center><img src="./image/logo.png" alt="logo" /></center>
                    <h3>ZapRecall</h3>
                </div>
                <div className="start-button" onClick={() => setStart(!start)}>Iniciar Recall!</div>
            </> : <StartRecall />
    )
}

export default function Home() {

    return (
        <>
            <ScreenOne />
        </>
    )
}
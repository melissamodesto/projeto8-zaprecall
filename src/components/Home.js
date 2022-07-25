import React from 'react'
import StartRecall from './StartRecall'
import logo from './image/logo-zap.png'

function ScreenOne() {

    const [start, setStart] = React.useState(true);

    return (
        start ?
            <>
                <div className='initial-screen'>
                    <center><img src={logo} alt='logo' /></center>
                    <h3>ZapRecall</h3>
                </div>
                <div className='start-button' onClick={() => setStart(!start)}>Iniciar Recall!</div>
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
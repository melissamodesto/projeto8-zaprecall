import './Reload.css';

export default function Reload () {
    return (
        <>
            <center><button className="reload" onClick={() => window.location.reload()}>REINICIAR RECALL</button></center>
        </>
    )
}
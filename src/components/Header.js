import logo from './image/logo-zap.png'

export default function Header() {
    return (
        <>
            <div className="header">
                <img src={logo} />
                <h3>ZapRecall</h3>
            </div>
        </>
    )
}
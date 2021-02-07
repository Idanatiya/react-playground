import logo from '../assets/img/logo.png'

const AppHeader = () => {
    return (
        <div className="app-header flex align-center space-around">
            <div className="logo flex align-center">
                <img className="app-logo" src={logo} alt="app-logo"/>
                <span>The JS Dojo</span>
            </div>
            <div className="links">
                <a href="/">Home</a>
                <a className="link-create" href="/create">Create</a>
            </div>
        </div>
    )
}

export default AppHeader
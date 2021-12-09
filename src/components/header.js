import { Link } from "react-router-dom"

function Header() {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm" aria-label="Eighth navbar example">
                <div className="container">
                    <Link to="/" className="text-decoration-none"><a className="navbar-brand" href="#1">Notícias</a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#let" id="dropdown06" data-bs-toggle="dropdown" aria-expanded="false">Categoria</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown06">
                               <Link to="/brasil" className="text-decoration-none"><li><a className="dropdown-item" href="/brasil">Brasil</a></li></Link>
                               <Link to="/negocios" className="text-decoration-none"><li><a className="dropdown-item" href="/negocios">Negócios</a></li></Link>
                               <Link to="/tecnologia" className="text-decoration-none"><li><a className="dropdown-item" href="/tecnologia">Tecnologia</a></li></Link>
                               <Link to="/entretenimento" className="text-decoration-none"><li><a className="dropdown-item" href="/entreterimento">Entretenimento</a></li></Link>
                               <Link to="/saude" className="text-decoration-none"><li><a className="dropdown-item" href="/saude">Saúde</a></li></Link>
                            </ul>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
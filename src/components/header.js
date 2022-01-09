import { Link } from "react-router-dom"

function Header() {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm" aria-label="Eighth navbar example">
                <div className="container">
                    <Link to="/" className="text-decoration-none"><span className="navbar-brand">The Guardian</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#let" id="dropdown06" data-bs-toggle="dropdown" aria-expanded="false">Categoria</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown06">
                                    <Link to="/brasil" className="text-decoration-none"><li><span className="dropdown-item">Brasil</span></li></Link>
                                    <Link to="/negocios" className="text-decoration-none"><li><span className="dropdown-item">Negócios</span></li></Link>
                                    <Link to="/tecnologia" className="text-decoration-none"><li><span className="dropdown-item">Tecnologia</span></li></Link>
                                    <Link to="/entretenimento" className="text-decoration-none"><li><span className="dropdown-item">Entretenimento</span></li></Link>
                                    <Link to="/saude" className="text-decoration-none"><li><span className="dropdown-item">Saúde</span></li></Link>
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
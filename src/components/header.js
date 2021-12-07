import List from "./list";

function Header() {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm" aria-label="Eighth navbar example">
                <div className="container">
                    <a className="navbar-brand" href="/">Notícias</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown06" data-bs-toggle="dropdown" aria-expanded="false">Categoria</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown06">
                                <li><a className="dropdown-item" href="#">Brasil</a></li>
                                <li><a className="dropdown-item" href="#">Negócios</a></li>
                                <li><a className="dropdown-item" href="#">Tecnologia</a></li>
                                <li><a className="dropdown-item" href="#">Entretenimento</a></li>
                                <li><a className="dropdown-item" href="#">Saúde</a></li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <List></List>
        </>
    )
}

export default Header;
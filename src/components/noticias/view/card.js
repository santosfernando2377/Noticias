function Card({ imagem, titulo, link, type }) {
    return (
        <>
            <div className="card my-4 mx-4 shadow rounded-2 w-100">
                <img src={imagem} className="card-img-top" alt="" />
                <div className="card-body">
                    <span className="badge rounded-pill bg-primary py-2">{type}</span>
                    <h5 className="card-title py-2">{titulo}</h5>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Acessar
                    </button>


                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Aviso</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p className="text-center">Você está abrindo uma notícia do The Guardian.</p>
                                    <a href={link} target="_blank" rel="noreferrer">
                                        <p className="text-center">
                                            <button type="button" className="btn btn-primary " data-bs-dismiss="modal">Clique aqui</button>
                                        </p>
                                    </a>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary " data-bs-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
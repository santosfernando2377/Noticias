function Card ({ imagem, titulo, contexto, pubData, link}) {
    return (
        <>
        <div className="card my-4 mx-4 shadow rounded-2">
            <img src={imagem} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{contexto}</p>
                <a href={link} target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Acessar</button></a>
                <p className="card-text my-1"><small className="text-muted">published: {pubData}</small></p>
            </div>
        </div>
        </>
    )
}

export default Card
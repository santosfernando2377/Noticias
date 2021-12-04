function Card ({ imagem, titulo, contexto, pubData}) {
    return (
        <div class="card my-3 mx-3">
            <img src={imagem} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{titulo}</h5>
                <p class="card-text">{contexto}</p>
                <p class="card-text"><small class="text-muted">{pubData}</small></p>
            </div>
        </div>
    )
}

export default Card
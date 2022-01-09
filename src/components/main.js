import Article from "../img/article.svg"

function Main() {
    
    document.title = "Notícias"
    
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src={Article} alt="" width="250" height="250"/>
                    <h1 className="display-5 fw-bold">The Guardian</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Projeto de notícias do site de notícias The Guardian.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a href="https://www.theguardian.com/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">The Guardian</button></a>
                            <a href="https://github.com/santosfernando2377" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark btn-lg px-4">GitHub</button></a>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Main;
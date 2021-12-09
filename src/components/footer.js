function Footer() {
    
    function DataAno () {
       let data = new Date();
       let Ano = data.getFullYear();
       return Ano
    }
    
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="text-muted">© {DataAno()} Notícias, Inc</span>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
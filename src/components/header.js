import axios from "axios";
import { useEffect, useState } from "react";

function Header () {

const [Filtro, setFiltro] = useState();
const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a2817a81c5604e7ebe75f58384990bea"

    useEffect(() =>{
        axios.get(url)
        .then((response) =>{
            Filtro(response.data)
        })
        .catch((error) =>{
            console.log(error);
        })
    })

    console.log(Filtro)

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary" aria-label="Eighth navbar example">
            <div class="container">
                <a class="navbar-brand" href="/">News Dev</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample07">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0"/>
                    <form>
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search" onChange={(event) => setFiltro(event.target.value)}/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;
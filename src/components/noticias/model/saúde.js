import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../view/card";

function NoticiaSau () {
    
    document.title = "Notícias - Saúde"

    const [Filtro, setFiltro] = useState([]);
    
        useEffect(() =>{
            axios.get("https://newsapi.org/v2/everything?q=saude&apiKey=a2817a81c5604e7ebe75f58384990bea")
            .then((response) =>{
                setFiltro(response.data.articles)
            })
            .catch((error) =>{
                console.log(error);
            })
        }, []);

    return (
        <div className="container px-4">
            {Filtro.map(noticia => {
                return (
                    <Card 
                    key={noticia.title}
                    imagem={noticia.urlToImage}
                    titulo={noticia.title}
                    contexto={noticia.description}
                    link={noticia.url}
                    pubData={noticia.publishedAt}
                    />
                )
            })}
        </div>
    )
}

export default NoticiaSau;
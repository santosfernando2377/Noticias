import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../view/card";

function NoticiaSau () {
    
    document.title = "Notícias - Saúde"

    const [Filtro, setFiltro] = useState([]);
    
        useEffect(() =>{
            axios.get("https://content.guardianapis.com/search?q=health&page-size=30&api-key=8f84a630-4947-4f2f-a327-41b5228c132d")
            .then((response) =>{
                setFiltro(response.data.response.results)
            })
            .catch((error) =>{
                console.log(error);
            })
        }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center container px-4">
            {Filtro.map(noticia => {
                return (
                    <Card 
                    key={noticia.webTitle}
                    imagem={'logo.svg'}
                    titulo={noticia.webTitle}
                    contexto={noticia.description}
                    link={noticia.webUrl}
                    pubData={noticia.webPublicationDate}
                    type={noticia.pillarName}
                    />
                )
            })}
        </div>
    )
}

export default NoticiaSau;
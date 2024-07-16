import { Character } from "./Character"
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Characters = () => {
    const [charactersArray, setCharactersArray] = useState([]);
    const [urlAPI, setUrlAPI] = useState("https://rickandmortyapi.com/api/character/");
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [totalPages, setTotalPages] = useState(null);

    useEffect(() => {

        // Definir un función asíncrona para la petición a la API
        const fetchData = async () => {
            try {
                // Realizar la petición a la API
                const response = await axios.get(urlAPI);
                // Obtener los datos de la petición
                const data = response.data.results;
                // Actualizar la variable de estado con los datos recibidos de la API.
                setCharactersArray(data);
                setNextPage(response.data.info.next);
                setPrevPage(response.data.info.prev);
                setTotalPages(response.data.info.pages);

            } catch (error) {
                console.error("Error al consultar los datos de la API: ", error);
            }
        };
        fetchData();
    }, [urlAPI]); // Dependencia urlAPI para que useEffect se ejecute cuando cambie


    // Modificación para retornar otra función para que la URL de la API se actualice solo cuando el usuario hace clic en los enlaces de paginación "Anterior" y "Siguiente", en lugar de ejecutarse automáticamente al renderizar el componente.
    const linkPage = (url) => () => {
        setUrlAPI(url);
    };

    let pagesList = [];
    for (let i = 1; i <= totalPages; i++) {
        const url = `https://rickandmortyapi.com/api/character/?page=${i}`;
        pagesList.push(<li className="page-item"><a className="page-link" onClick={linkPage(url)}>{i}</a></li>)
    }

    return (
        <>
            <header className="bg-light m-2 p-5 ">
                <h1 className="text-dark">The Rick and Morty Gallery</h1>
            </header>
            <div className='container'>
                <div className='row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-2 py-2'>
                    {charactersArray.map((char) =>
                        <Character
                            key={char.id}
                            id={char.id}
                            name={char.name}
                            status={char.status}
                            species={char.species}
                            gender={char.gender}
                            location={char.location.name}
                            image={char.image}
                        />
                    )}
                </div>
            </div>
            <nav aria-label="Paginacion Personajes">
                <ul className="pagination pagination-sm justify-content-center">
                    {prevPage !== null && (
                        <li className="page-item">
                            <a className="page-link" onClick={linkPage(prevPage)} href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>)
                    }
                    {pagesList}
                    {nextPage !== null && (
                        <li className="page-item">
                            <a className="page-link" onClick={linkPage(nextPage)} href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>)
                    }
                </ul>
            </nav>
        </>
    )
}
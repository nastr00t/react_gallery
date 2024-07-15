import { Character } from "./Character"
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Characters = () => {
    const [charactersArray, setCharactersArray] = useState([]);


    useEffect(() => {

        // Definir un función asíncrona para la petición a la API
        const fetchData = async () => {
            try {

                 // Realizar la petición a la API
                 axios.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16").then((response) => {

                     // Obtener los datos de la petición
                     const data = response.data;

                     // Actualizar la variable de estado con los datos recibidos de la API.
                     setCharactersArray(data);
                 });
             } catch (error) {
                 console.error("Error al consultar los datos de la API: ", error);
             }
        };
        fetchData();
    }, []); // Array de depencias vacío para que useEffect se ejecute una vez

    //useEffect(() => {
    //    try {

    //        fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18")
    //            .then((response) => response.json())
    //            .then((data) => setCharactersArray(data));
    //    } catch (error) {
    //        console.error("Error al consultar los datos de la API: ", error);
    //    }

    //}, []);

    return (
        <>
            <header className="bg-light m-2 p-5 ">
                <h1 className="text-dark">The Rick and Morty Gallery</h1>
            </header>
            <div className='container'>
                <div className='row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-2 py-2'>
                    {charactersArray.map((char) =>
                        <Character 
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
        </>
    )
}

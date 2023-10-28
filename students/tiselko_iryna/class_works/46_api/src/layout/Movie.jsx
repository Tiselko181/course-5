import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../api/getData";
import appLocalStorage from "../api/appLocalStorage";

const imagesUrl = 'https://image.tmdb.org/t/p/original';

function Movie() {
    const params = useParams();

    const url = `/movie/${params.id}?language=en-US`;

    const [movie, setMovie] = useState(
        () => {
            return appLocalStorage(url)?.results;
            // return JSON.parse(
            //     window.localStorage.getItem(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`)
            // ) || null;
        }
    );

    useEffect(
        () => {
            async function getMovie() {
                const data = getData(url);
                if (!data) return;

                setMovie(data);

                appLocalStorage(url, data);

                // window.localStorage.setItem(url, JSON.stringify(data));
            }
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTZiOGRiN2E2ZmQ5MjMwNzk0OGI5OGVkZTAzNzc2NyIsInN1YiI6IjY1M2MwNzA3YmMyY2IzMDEyYzMwYWVmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hf1dKZyfc-8FfhPsWXVrUmwt9T9OXJi0tTYwax4RQfk'
                }
            };

            fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, options)
                .then(response => response.json())
                .then(
                    (response) => {
                        setMovie(response);

                        window.localStorage.setItem(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, JSON.stringify(response));
                    })
                .catch(err => console.error(err));
        },
        []
    );

    if (!movie) return <p>Loading...</p>;
    return (
        <>
            <h1>{movie.title}</h1>
            <img src={`${imagesUrl}${movie.backdrop_path}`} alt="" />
            <p>{params.id}</p>
        </>

    );
}

export default Movie;

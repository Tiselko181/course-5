import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getData from "../api/getData";

const imagesUrl = 'https://image.tmdb.org/t/p/w500';

function Movies() {
    const [movieList, setMovieList] = useState(
        () => {
            const data = JSON.parse(
                window
                    .localStorage
                    .getItem(
                        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
                    )
            );

            return data ? data.results : [];
        }
    );

    useEffect(() => {
        async function getMovie() {
            const data = await getData(
                '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
            );

            if (!data.results) return;

            window.localStorage.setItem('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', JSON.stringify(data));

            setMovieList(data.results);
        }

        movieList.length || getMovie();
    }, [movieList]);

    return (
        <>
            <h1 className="text-5xl ">Movies</h1>
            <div className="flex flex-wrap ">
                {movieList.map(
                    (movie) => {
                        return (
                            <div key={movie.id} className="p-5 w-1/2">
                                <Link to={`/movies/${movie.id}`}>
                                    <h2>{movie.title}</h2>
                                    <img src={`${imagesUrl}${movie.poster_path}`} alt="" />
                                </Link>
                            </div>
                        );
                    }
                )}
            </div>
        </>
    );
}

export default Movies;

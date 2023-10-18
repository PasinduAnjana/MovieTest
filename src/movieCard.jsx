import React from "react";
// import { MoviePlayer } from "./moviePlayer";

const MovieCard = ({ movie1 }) => {
    return (
        <div className='bg-zinc-800  rounded-3xl hover:shadow-2xl
         text-center text-white m-2 overflow-hidden shadow-xl w-fit'>
            <img className="" src={movie1.Poster} />
            <div className='p-4'>
                <p className='text-lg font-bold whitespace-no-wrap overflow-ellipsis'>{movie1.Title}</p>
                <p> {movie1.Year} </p>

                {
                    movie1.Type == 'movie' ?
                        <div>
                            <a className="text-yellow-300 font-bold" href={"https://vidsrc.to/embed/movie/" + movie1.imdbID} >
                                Watch Movie
                            </a>
                        </div> :
                        <div>
                            <a className="text-yellow-300 font-bold" href={"https://vidsrc.to/embed/tv/" + movie1.imdbID} >
                                Watch Series
                            </a>
                        </div>
                }

            </div>

        </div>
    )
}

export default MovieCard;
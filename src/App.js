import { React, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css"

const api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=1a511545"

const testmovie = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App =() => {

    const [movie, setMovie] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const searchMovieTitle = async (title) => {
        const response = await fetch(`${api_url}&s=${title}`);
        const data = await response.json();
        setMovie(data.Search);
    }
    

    useEffect(() => {
        searchMovieTitle("Shakespeare");
    },[])

    return(
        <div className="app">

            <h1>Design Pandas Movies</h1>

            <div className="search" >
              <input placeholder="Search For Movies" onChange={(e) => setSearchTerm(e.target.value)} />
                <svg onClick={()=>searchMovieTitle(searchTerm)} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.8594 29.8594L39.4219 39.4219" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            {
                movie?.length > 0 ? (
                <div className="container">
                    {movie.map((movie )=> <MovieCard movie={movie}/>)}
                </div>
                ):(
                    <div className="empty"><h2>No Movies Found</h2></div>
                )
            }

            

        </div>
    )
}

export default App;
import React from "react";

const MovieCard = ({movie}) => {
    return(
        <div className="movie" >
                    <div>
                        <p>{movie.Year}</p>
                    </div>
                    <div>
                        <img src={movie.Poster !== "N/A" ?movie.Poster :"https://via.placeholder.com/400"} alt={movie.Title} />
                    </div>
                    <div>
                        <span>{movie.Type}</span>
                        <h3>{movie.Title}</h3>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                        <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
                        <path class="play-btn__svg" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"/>
                        </svg> 
                    </div>
                </div>
    )
};

export default MovieCard
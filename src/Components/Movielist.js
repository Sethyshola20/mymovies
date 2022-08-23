import React from "react";

export default function Movielist(props){
    const FavoriteComponent = props.favoriteComponent;
    return(
        <>
            {props.movies.map((film, index)=>
            <div className="poster-swiper">
                <div className="title">{film.Title}</div>
                <img src={film.Poster} className="poster" alt="movie poster"></img>
                <div onClick={()=> props.handleListClicked(film)}>
                    <FavoriteComponent />
                </div>
            </div>)}
        </>
    )
}
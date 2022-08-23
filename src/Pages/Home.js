import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Movielist from "./Movielist";
import Myfavourites from "./Myfavourites";
import Removefavourites from "./Removefavourites";

export default function Home() {

  const [movies, setMovies] = useState([]);
  const [myList, setMyList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=bb94dc36`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(()=> { 
    getMovieRequest(searchValue);
  }, [searchValue]);
  
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites'));
    if(movieFavourites) {
      setMyList(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const addMovieToList = (film) => {
    const newList = [...myList, film];
    setMyList(newList);
    saveToLocalStorage(newList);
  };

  const removeFavouriteMovie = (film) => {
    const newList = myList.filter(
      (favourite) => favourite.imdbID !== film.imdbID
    );
    setMyList(newList);
    saveToLocalStorage(newList)
  };
    return(
    <div className="main-page">
      <Sidebar />
      <div className='content'>
        <h1 className='main-heading'>Home</h1>
        <div className="search-bar">
          <form searchValue={searchValue} setSearchValue={setSearchValue} className='search'>
            <input className="search_input" type='text' placeholder='search' onChange={(event)=> setSearchValue(event.target.value)}/>
          </form>
        </div>
        <div className='movies'>
          <h2 className="menu-heading"> MOVIES</h2>
          <div className="movielist">
            <Movielist movies={movies} favoriteComponent={Myfavourites} handleListClicked={addMovieToList} />
          </div>
        </div>
        <div className="movies">
          <h2 className="menu-heading">MA LISTE</h2>
          <div className="movielist">
            <Movielist movies={myList} favoriteComponent={Removefavourites} handleListClicked={removeFavouriteMovie}/>
          </div>
        </div>
      </div>
    </div>
    )
};
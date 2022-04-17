import React, { useState, useEffect } from 'react'
import './App.css';
import MovieList from './components/movies-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';
import { useCookies } from 'react-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useFetch } from './hooks/useFetch'

function App() {

  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);
  const [ token, setToken, deleteToken ] = useCookies(['mr-token']);
  const [data, loading, error] = useFetch();


  useEffect(() => {
    setMovie(data);
  }, [data])

  useEffect( () => {
    console.log(token);
    if(token['mr-token']) window.location.href = '/';
  }, [token])

  const loadMovie = movie => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  }

  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }

  const updatetMovie = movie => {
    const newMovies = movies.map( mov => {
      if (mov.id === movie.id) {
        return movie;
      }
      return mov;
    })
    setMovie(newMovies)
  }

  const newMovie = () => {
    setEditedMovie({title:'', description: ''});
    setSelectedMovie(null);
  }

  const movieCreated = () => {
    const newMovies = [...movies, movies];
    setMovie(newMovies);
  }

  const removeClicked = movie => {
    const newMovies = movies.filter( mov => {
      if (mov.id === movie.id ) {
        return false;
      }
      return true;
    })
    setMovie(newMovies);
  }

  const logoutUser = () => {
    deleteToken(['mr-token']);
  }

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error loading movie</h1>

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FontAwesomeIcon icon={faFilm}/>
          <span>Movie Rater</span>
        </h1>
        <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser}/>
      </header>
      <div className="layout">
        <div>
          <MovieList 
          movies={movies} 
          movieClicked={loadMovie} 
          editClicked={editClicked} 
          removeClicked={removeClicked}
          />
          <button onClick={ newMovie }></button>
        </div>
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
        { !editedMovie ? 
        <MovieForm movie={editedMovie} updateMovie={updatetMovie} movieCreated={newMovie}/> : null}
      </div>
    </div>
  );
}

export default App;

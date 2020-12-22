// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const moviesList = this.props.movies;
    return (
      <div>
        {moviesList.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    );
  }
}
export default MovieList;

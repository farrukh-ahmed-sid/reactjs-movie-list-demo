import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import {selectMovies} from '../selectors/movies';
import EmptyListImg from '../../public/images/empty_list.png';

const MovieList = (props) => (
  <div>
    <div className="movieList">
      {(props.movies.length === 0) ? 
        <img src={EmptyListImg} alt="empty list image" /> : 
        <ol>
          <div className="movieListHeading">Movie List</div>
          {
            props.movies.map((movie) => {
              return <MovieListItem key={movie.id} {...movie} />;
            })
          }
        </ol>
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    movies: selectMovies(state.movies, state.filters)
  };
};

export default connect(mapStateToProps)(MovieList);

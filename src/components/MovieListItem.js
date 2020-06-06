import React from 'react';
import { connect } from 'react-redux';
import { removeMovie } from '../actions/movies';

const MovieListItem = ({dispatch, id, name, rating, description}) => (
  <li className="movieItem">
    <div className="movie">
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
      <button onClick={() => {
        dispatch(removeMovie({ id }));
      }}>Remove</button>
    </div>
    <p className="movieDetail">{description}</p>
  </li>
);

export default connect()(MovieListItem);

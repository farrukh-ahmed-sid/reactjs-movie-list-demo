import React from 'react';
import AddMovie from './AddMovie';
import { connect } from 'react-redux';
import { addMovie } from '../actions/movies';

const AddMoviePage = (props) => (
  <div className="addMovie">
    <h2>Add Movie</h2>
    <AddMovie
      onSubmit={(movie) => {
        props.dispatch(addMovie(movie));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddMoviePage);

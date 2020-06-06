import React from 'react';
import { connect } from 'react-redux';
import { textFilter, sortByName, sortByRating } from '../actions/filters';

const MovieListFilters = (props) => (
  <div className="movieListFilter">
    <h3>Search: </h3>
    <input
      className="nameFilter"
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(textFilter(e.target.value));
      }}
    />
    <h3>Sort: </h3>
    <select
      className="ratingFilter"
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'name') {
          props.dispatch(sortByName());
        } else if (e.target.value === 'rating') {
          props.dispatch(sortByRating());
        }
      }}
    >
      <option value="name">Name</option>
      <option value="rating">Rating</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(MovieListFilters);

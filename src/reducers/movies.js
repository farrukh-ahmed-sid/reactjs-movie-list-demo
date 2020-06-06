// Movies Reducer

const moviesReducerDefaultState = [];

export default (state = moviesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        action.movie
      ];
    case 'REMOVE_MOVIE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

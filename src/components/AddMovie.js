import React from 'react';

export default class AddMovie extends React.Component {
  state = {
    name: '',
    rating: '',
    description: ''
  };
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onRatingChange = (e) => {
    const rating = e.target.value;

    if(rating.match(/^[0-9]*$/)) {
      this.setState(() => ({ rating }));
    }
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if(this.state.rating && this.state.name && this.state.description){
      this.props.onSubmit({
        name: this.state.name,
        rating: this.state.rating,
        description: this.state.description
      });
    } else {
      alert("Please fill all fields");
    }
  };
  render() {
    return (
      <div className="addMovieDiv">
        <form onSubmit={this.onSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Name"
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Rating"
            value={this.state.rating}
            onChange={this.onRatingChange}
          />
          <textarea
            className="input"
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

import './TodoEditor';
import React, { Component } from 'react';

export default class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };
  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Зберегти
        </button>
      </form>
    );
  }
}

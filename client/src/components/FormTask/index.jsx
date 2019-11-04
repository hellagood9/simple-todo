
// NOTE: Responsable de renderizar un formulario, recoger valores y retornarlos al componente padre
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CATEGORIES = [
  { text: 'Personal', type: 'Personal' },
  { text: 'Home', type: 'Home' },
  { text: 'Finance', type: 'Finance' },
  { text: 'Work', type: 'Work' },
  { text: 'Shopping', type: 'Shopping' },
];

export default class FormTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      category: '',
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state);
    this.setState({
      name: '',
      category: '',
    });
  }

  handleNameChange = (evt) => {
    const { value } = evt.target;
    this.setState({ name: value });
  }

  handleCategoryChange = (evt) => {
    const { value } = evt.target;
    this.setState({ category: value });
  }

  render() {
    const { name, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Add a task"
          onChange={this.handleNameChange}
          value={name}
        />
        <ul>
          { CATEGORIES.map(({ type, text }) => (
            <li key={type}>
              <input
                type="radio"
                name="category"
                value={type}
                checked={type === category}
                onChange={this.handleCategoryChange}
              />
              <label htmlFor="category">{text}</label>
            </li>
          ))}
        </ul>
        <button type="submit">Add task</button>
      </form>
    );
  }
}

FormTask.propTypes = {
  onSubmit: PropTypes.object,
};

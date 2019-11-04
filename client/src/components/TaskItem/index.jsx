import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'Pending',
    };
  }

  /** TODO:
   * 1. Mover la lógica de traerse todas las tasks a TasksLists. Hacer petición en ComponentDidMount.
   * Hacerlo igual que en Home: solamente hay que moverlo a TasksLists.
   * 2. Pasar todas las tasks a TasksLists en el render.
   * Poner las props que hagan falta en TasksLists
   * 3. En TasksLists hacer un bucle para pintar todos los TaskItem
   * 4. TaskItem tiene que tener todas las propiedades editables de la task en el state "sueltas",
   * NO EN UN OBJECT. O sea, no vale this.state = task.
   * 5. En TaskItem crear un método para modificar el status (que formará parte del state)
   * en el onChange
   * 6. Usar componentDidUpdate para hacer el PUT de la task.
   * https://reactjs.org/docs/react-component.html#componentdidupdate
   */

  render() {
    const { status } = this.state;
    const { value, onItemChecked, onItemClick } = this.props;
    return (
      <div key={task._id}>
        <input
          type="checkbox"
          name={value}
          value={value}
          checked={status}
          onChange={() => onItemChecked(task._id)}
        />
        <label htmlFor={task.name}>{task.name}</label>
        {task.category}
        <button type="submit" onClick={() => onItemClick(task._id)}>x</button>
      </div>
    );
  }
}

TaskItem.propTypes = {
  value: PropTypes.string,
  onItemClick: PropTypes.function,
  onItemChecked: PropTypes.bool,
  status: PropTypes.string,
};

export default TaskItem;

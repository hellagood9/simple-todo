// NOTE: Responsable de cargar datos y elementos de página
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskService from '../services/tasks.service';
import FormTask from '../components/FormTask';
import TasksList from '../components/TasksList';

const taskService = new TaskService();

class Home extends Component {
  componentDidMount() {
    const { getTasks } = this.props;
    getTasks();
  }

  handleFormTaskSubmit = (formValues) => {
    const { addTask } = this.props;
    addTask(formValues);
  };

  // async addNewTask(formValues) {
  

  //   this.setState({ tasks: createdTask });
  // }

  deleteTask = async (task) => {
    // Lanzar DELETE_TASK action


    // await this.service.deleteTask(task);
    // this.getTasks();
  }

  updateTask = async ({ _id: taskId, ...taskData }) => {
    // Lanzar UPDATE_TASK action


    // const updatedTask = await this.service.putTask(taskId, taskData);

    // this.setState(currentState => {
    //   const { tasks } = currentState;
    //   const index = tasks.findIndex(task => task._id === updatedTask._id);
    //   tasks[index] = updatedTask;
    //   return  { tasks };
    // });

  }

  render() {
    const { tasks } = this.props;

    return (
      <>
        <FormTask
          onSubmit={this.handleFormTaskSubmit}
        />
        <TasksList
          tasks={tasks}
          status="Pending"
          onItemChecked={this.updateTask}
          onItemClick={(itemId) => this.deleteTask(itemId)}
        />
        <TasksList
          tasks={tasks}
          status="Done"
          onItemChecked={this.updateTask}
          onItemClick={(itemId) => this.deleteTask(itemId)}
        />
      </>
    );
  }
}

const mapStateToProps = (reduxStore) => {
  // Mapea contenido del redux store como props del componente envuelto
  const { tasks } = reduxStore;
  return { tasks };
}

const mapDispatchToProps = (dispatch) => {
  // Nos da la funcion dispatch para lanzar actions
  return {
    getTasks: async () => {
      const tasks = await taskService.getTasks();    
      dispatch({ type: 'GET_TASKS', payload: tasks });
    },
    addTask: async (formValues) => {
        const { name, category } = formValues;
        if (name === '' || category === '') return;

        const createdTask = await taskService.postTask({
          name,
          category,
        });
        
      dispatch({ type: 'ADD_TASK', payload: createdTask });
    },
    deleteTask: () => {
      dispatch({ type: 'DELETE_TASK' });
    },
    updateTask: (payload) => {
      dispatch({ type: 'UPDATE_TASK', payload });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Home);
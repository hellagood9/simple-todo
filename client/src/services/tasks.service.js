import axios from 'axios';

export default class TaskService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}/tasks`,
    });
  }

  getTasks = async () => {
    const allTasks = await this.service.get();
    return allTasks.data;
  };

  postTask = async (taskData) => {
    const newTask = await this.service.post('/', taskData);    
    return newTask.data;
  };

  deleteTask = async (taskId) => {
    const deletedTask = await this.service.delete(`/${taskId}`);
    return deletedTask.data;
  };

  putTask = async (taskId, taskData) => {
    const updatedTask = await this.service.put(`/${taskId}`, taskData);
    return updatedTask.data;
  };
}

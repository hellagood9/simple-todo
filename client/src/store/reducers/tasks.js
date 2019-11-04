// NOTE: Responsable de gestionar las acciones y modificar el estado de store.tasks

function tasks(tasksState = [], action) {
  switch (action.type) {
    case 'GET_TASKS':
      return action.payload;

    case 'ADD_TASK':
      return [
        ...tasksState,
        action.payload
      ]
    // ------------------------------
    // case TOGGLE_TODO:
    //   return state.map((todo, index) => {
    //     if (index === action.index) {
    //       return Object.assign({}, todo, {
    //         completed: !todo.completed
    //       })
    //     }
    //     return todo
    //   })
    default:
      return tasksState
  }
}

export default tasks;
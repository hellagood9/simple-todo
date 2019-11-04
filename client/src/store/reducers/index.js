// NOTE: Responsable de combinar todos los reducers en uno solo
import { combineReducers } from 'redux';

import tasksReducer from './tasks'

const todoCombinedReducers = combineReducers({
  tasks: tasksReducer
})

export default todoCombinedReducers;
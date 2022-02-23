import initialState from './initialState';
import {ADD_TODO, DELETE_TODO} from './actionTypes';

const todoListReducer = (state = initialState.todos, action) => {
    switch (action.type) {
        case ADD_TODO:
      return {todos: [...state.todos, action.payload]};
    case DELETE_TODO:
      return {todos: handleDeleteTodo(action.payload, state.todos)};
        default:
            return state;
    }
};

const handleDeleteTodo = (item, todos) => {
  const todoIndex = todos.indexOf(item);
  todos.splice(todoIndex, 1);
  return todos;
};


export default todoListReducer;
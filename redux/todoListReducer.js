import initialState from './initialState';
import {ADD_TODO, DELETE_TODO} from './actionTypes';


const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todos) => {
          return todos.id !== action.payload.id
        })]
      }
      default:
        return state;
      }
    };
    
    export default todoListReducer;
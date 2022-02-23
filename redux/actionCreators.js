import {ADD_TODO, DELETE_TODO} from './actionTypes';

export const  DeleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {
        id
    }
})

export const AddTodo = ( id, title, body, urgent) => ({
    type: ADD_TODO,
    payload: {
        id: id,
        title: title,
        body: body,
        urgent: urgent,
    }
});
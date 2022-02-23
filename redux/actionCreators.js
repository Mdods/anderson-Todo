import types from './actionTypes';

const actionCreators = {
    AddTodo: (title) => {
        let listId = Math.round(Math.random() * 100);
        return { type: types.ADD_TODO, payload: { listId, title } };
    },
    DeleteTodo: (listId) => {
        return { type: types.DELETE_TODO, payload: { listId } };
    },
    
};

export default actionCreators;
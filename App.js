import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import AppContainer from './container/AppContainer';
import rootReducer from './redux/reducer'
import NewTaskTodo from './screens/NewTodoScreen';

const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, middleware);
export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}



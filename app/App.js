import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';


export default class App extends React.Component {
  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

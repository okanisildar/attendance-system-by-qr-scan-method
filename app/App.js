import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import { fetchTeachers } from './constant/api';

export default class App extends React.Component {

  componentDidMount() {
    fetch('http://10.127.59.189:3000/teachers').then(result => result.json()
      .then(resultJson => console.log(resultJson)));
  }

  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator } from 'react-navigation';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import RegisterForm from './src/components/RegisterForm';
import MainMenu from './src/components/MainMenu';
import RegisterScreen from './src/screens/RegisterScreen';
import MainMenuScreen from './src/screens/MainMenuScreen';
import NewAttendanceScreen from './src/screens/NewAttendanceScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewAttendanceScreen from './src/screens/ViewAttendanceScreen';

export default class App extends React.Component {

  componentDidMount() {
    fetch('http://10.127.59.189:3000/teachers').then(result => result.json()
      .then(resultJson => console.log(resultJson)));
  }

  render() {
    const store = createStore(reducers);

    const MainNavigator = StackNavigator({
      welcome: { screen: WelcomeScreen },
      register: { screen: RegisterScreen },
      login: { screen: LoginForm },
      mainMenu: { screen: MainMenuScreen },
      newAttendance: { screen: NewAttendanceScreen },
      viewAttendance: { screen: ViewAttendanceScreen }
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

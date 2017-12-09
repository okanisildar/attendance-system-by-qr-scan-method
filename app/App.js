import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import RegisterForm from './src/components/RegisterForm';
import MainMenu from './src/components/MainMenu';
import RegisterScreen from './src/screens/RegisterScreen';
import MainMenuScreen from './src/screens/MainMenuScreen';
import NewAttendanceScreen from './src/screens/NewAttendanceScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewAttendanceScreen from './src/screens/ViewAttendanceScreen';
import UpdateTeacherScreen from './src/screens/UpdateTeacherScreen';

export default class App extends React.Component {

  componentDidMount() {
   
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    const MainNavigator = StackNavigator({
      mainMenu: { screen: MainMenuScreen },
      welcome: { screen: WelcomeScreen },
      register: { screen: RegisterScreen },
      login: { screen: LoginForm },
      
      newAttendance: { screen: NewAttendanceScreen },
      viewAttendance: { screen: ViewAttendanceScreen },
      updateTeacherInfo: { screen: UpdateTeacherScreen }
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

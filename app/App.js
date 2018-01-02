import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StackNavigator } from 'react-navigation';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import RegisterScreen from './src/screens/RegisterScreen';
import MainMenuScreen from './src/screens/MainMenuScreen';
import NewAttendanceScreen from './src/screens/NewAttendanceScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewAttendanceScreen from './src/screens/ViewAttendanceScreen';
import UpdateTeacherScreen from './src/screens/UpdateTeacherScreen';
import AttendanceDetailsScreen from './src/screens/AttendanceDetailsScreen';
import CreateStudentScreen from './src/screens/CreateStudentScreen';

export default class App extends React.Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    const MainNavigator = StackNavigator({
      welcome: { screen: WelcomeScreen },
      register: { screen: RegisterScreen },
      login: { screen: LoginForm },
      mainMenu: { screen: MainMenuScreen },
      newAttendance: { screen: NewAttendanceScreen },
      viewAttendance: { screen: ViewAttendanceScreen },
      updateTeacherInfo: { screen: UpdateTeacherScreen },
      createStudent: { screen: CreateStudentScreen },
      attendanceDetails: { screen: AttendanceDetailsScreen }
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

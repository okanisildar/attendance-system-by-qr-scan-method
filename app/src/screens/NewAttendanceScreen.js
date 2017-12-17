import React, { Component } from 'react';
import NewAttendance from '../components/NewAttendance';
import CreateStudent from '../components/CreateStudent';

class NewAttendanceScreen extends Component {
	render() {
		return (
			<NewAttendance navigation={this.props.navigation}/>
			
		);
	}
}

export default NewAttendanceScreen;
{/*<CreateStudent />*/}

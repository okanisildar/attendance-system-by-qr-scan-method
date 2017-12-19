import _ from 'lodash';
import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { List, Text, Container, Content } from 'native-base';
import { getRecords } from '../actions';
import ListItem from './ListItem';


class ViewAttendance extends Component {
	componentWillMount() {
		const { teacherId } = this.props.navigation.state.params;
		this.props.getRecords({ teacherId });
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ records }) { //it is from props
		const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
		const items = _.map(records, (val, key) => {
				return { ...val, key };
			});
    this.dataSource = ds.cloneWithRows(items);
	}

	renderRow(record, navigation) {
		return (
				<ListItem record={record} navigation={navigation} />
		);
	}

	render() {
		const { navigation } = this.props;
		//const items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
		return (
			<Container>
					<ListView
						enableEmptySections
						dataSource={this.dataSource}
						renderRow={(record) => this.renderRow(record, navigation)}
					/>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	const { records, loading } = state.attendance;
	return { records, loading };
};


export default connect(mapStateToProps, { getRecords })(ViewAttendance);

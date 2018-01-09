import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';
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
		return (
			<Container style={styles.containerStyle}>
					<ListView
						enableEmptySections
						dataSource={this.dataSource}
						renderRow={(record) => this.renderRow(record, navigation)}
					/>
			</Container>
		);
	}
}

const styles = {
	containerStyle: {
		flex: 1,
    backgroundColor: '#c0deed'
  }
};

const mapStateToProps = (state) => {
	const { records, loading } = state.attendance;
	return { records, loading };
};


export default connect(mapStateToProps, { getRecords })(ViewAttendance);

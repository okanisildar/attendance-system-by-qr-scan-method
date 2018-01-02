import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, ListView } from 'react-native';
import { Container, Content, ListItem, Left, Body, Right, Icon, List } from 'native-base';
import { listStudentsByCourse } from '../actions';
import { FieldContainer, ItemContainer } from './common';


class AttendanceDetails extends Component {
  componentWillMount() {
    const { courseName } = this.props.navigation.state.params.record;
    this.props.listStudentsByCourse({ courseName });
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ allStudents }) { 
    //const { students } = navigation.state.params.record;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const items = _.map(allStudents, (val, key) => {
        return { ...val, key };
    });
    this.dataSource = ds.cloneWithRows(items);
  }

	renderRow(student) {
    const { students } = this.props.navigation.state.params.record;
    const { studentNumber, name, surname } = student;
    let isAbsent;
    if (students.includes(studentNumber)) {
      isAbsent = false;
    } else {
      isAbsent = true;
    }
		return (
			<TouchableWithoutFeedback>
        <Container style={styles.lineStyle}>
          <Body style={{ flexDirection: 'row' }}>
            <Text style={styles.studentNumberStyle}>{studentNumber}</Text>
            <Text style={styles.textStyle}>
              {`${name} ${surname}`}
            </Text>
          </Body>
          <Right style={styles.iconStyle}>
            {!isAbsent ?
              <Icon name="ios-checkmark-circle" style={{ color: 'green' }} />
              :
              <Icon name="ios-close-circle" style={{ color: 'red' }} />
            }
          </Right>
        </Container>
      </TouchableWithoutFeedback>
    );
	}

	render() {
		return (
			<Container style={styles.containerStyle}>
        <ListView 
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={student => this.renderRow(student)} 
        />
      </Container>
		);
	}
}

const styles = {
  containerStyle: {
    backgroundColor: '#c0deed'
  },
  lineStyle: {
    flexDirection: 'row', 
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#fff' 
  },
  textStyle: {
    fontSize: 18,
    flex: 2
  },
  studentNumberStyle: {
    flex: 1,
    fontSize: 18,
    alignItems: 'flex-end'
  },
  iconStyle: {
    flex: 0.5
  }
};

const mapStateToProps = state => {
  const { allStudents, getError } = state.student;
  return { allStudents, getError };
};

export default connect(mapStateToProps, { listStudentsByCourse })(AttendanceDetails);

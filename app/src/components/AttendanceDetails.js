import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, ListView } from 'react-native';
import { Container, Content, ListItem, Left, Body, Right, Icon, List } from 'native-base';
import { listStudentsByCourse } from '../actions';
import { FieldContainer, ItemContainer } from './common';


class AttendanceDetails extends Component {
  componentWillMount() {
    const { courseName } = this.props.navigation.state.params.record;
    this.props.listStudentsByCourse({ courseName })
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
    console.log(student)
		return (
			<TouchableWithoutFeedback>
        <View>
          <ItemContainer>
            <FieldContainer>
              <Body>
                <Text>
                asd 
                </Text>
              </Body>
              <Right>
              	<Icon name="ios-checkmark-circle" style={{ color: 'green' }} />
                <Icon name="ios-close-circle" style={{ color: 'red' }} />
              </Right>
            </FieldContainer>
          </ItemContainer>
        </View>
      </TouchableWithoutFeedback>
    );
	}

	render() {
   console.log(this.props)
		return (
			<Container style={{ marginLeft: -10 }}>
        <ListView 
          dataSource={this.dataSource}
          renderRow={student => this.renderRow(student)} 
        />
      </Container>
		);
	}
}

const mapStateToProps = state => {
  const { allStudents, getError } = state.student;
  return { allStudents, getError };
};

export default connect(mapStateToProps, { listStudentsByCourse })(AttendanceDetails);
/*
  <List 
            dataArray={}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            } />
*/
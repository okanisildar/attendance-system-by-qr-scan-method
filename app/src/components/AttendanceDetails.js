import _ from 'lodash';
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, ListView } from 'react-native';
import { Container, Content, ListItem, Left, Body, Right, Icon, List } from 'native-base';
import { FieldContainer, ItemContainer } from './common';


class AttendanceDetails extends Component {
  componentWillMount() {
    const { students } = this.props.navigation.state.params.record;
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ navigation }) { 
    const { students } = navigation.state.params.record;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(students);
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
                 {student}  
                </Text>
              </Body>
              <Right>
              	<Icon name="checkmark-circle" style={{ color: 'green' }} />
              </Right>
            </FieldContainer>
          </ItemContainer>
        </View>
      </TouchableWithoutFeedback>
    );
	}

	render() {
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

export default AttendanceDetails;
/*
  <List 
            dataArray={}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            } />
*/
import _ from 'lodash';
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, ListView } from 'react-native';
import { Container, Content, ListItem, Left, Body, Right, Icon, List } from 'native-base';

let items = [];

class AttendanceDetails extends Component {
	renderRow() {
		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <Container style={{ marginLeft: -10 }}>
          <Body>
            <Text>
              courseName  
            </Text>
          </Body>
          <Right>
          	<Icon name="checkmark-circle" style={{ color: 'green' }} />
          </Right>
        </Container>
      </TouchableWithoutFeedback>
    );
	}

	render() {
		return (
			<Container style={{ marginLeft: -10 }}>
          <List 
          	dataArray={}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            } />
      </Container>
		);
	}
}

export default AttendanceDetails;

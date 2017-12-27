import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { Icon, Container } from 'native-base';
import moment from 'moment';

class ListItem extends Component {
  onRowPress() {
    const { record } = this.props;
    const { navigate } = this.props.navigation;
    navigate('attendanceDetails', { record });
  }

  render() {
    const { courseName, date } = this.props.record;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <Container style={styles.containerStyle}>
          <Text style={styles.labelStyle}>Course:</Text>
          <Text style={styles.titleStyle}>{courseName}</Text> 
          <Text style={styles.labelStyle}>Date:</Text>
          <Text style={styles.titleStyle}>
            {moment(date).format('DD/MM/YYYY')}
          </Text>
          <Icon name='ios-arrow-forward' style={{ color: 'grey', marginLeft: 5 }} />
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#c0deed',
    flexDirection: 'row', 
    height: 30,
    borderBottomWidth: 1,
    borderColor: '#fff'
  },
  titleStyle: {
    fontSize: 18,
    color: '#4b658e',
    flex: 3
  },
  labelStyle: {
    fontSize: 18,
    color: 'black',
    flex: 2
  }
};

export default ListItem;

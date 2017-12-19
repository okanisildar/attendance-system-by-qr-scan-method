import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from 'native-base';
import moment from 'moment';
import { FieldContainer, ItemContainer } from './common';

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
        <View>
          <ItemContainer>
            <FieldContainer>
              <Text style={styles.titleStyle}>
                <Text style={styles.labelStyle}>Course: </Text>{courseName}  
              </Text>
              <Text style={styles.titleStyle}>
                <Text style={styles.labelStyle}>   Date: </Text>{moment(date).format('DD/MM/YYYY')}
              </Text>
              <Icon name='ios-arrow-forward' style={{ color: 'grey', marginLeft: 5 }} />
            </FieldContainer>
          </ItemContainer>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    color: '#4b658e'
  },
  labelStyle: {
    fontSize: 18,
    color: 'black'
  }
};

export default ListItem;

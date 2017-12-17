import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { FieldContainer, ItemContainer } from './common';

class ListItem extends Component {
  onRowPress() {
    const { navigate } = this.props.navigation;
    navigate('attendanceDetails');
  }

  render() {
    const { courseName } = this.props.record;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <ItemContainer>
            <FieldContainer style={{ height: 40 }}>
              <Text style={styles.titleStyle}>
                {courseName}
              </Text>
            </FieldContainer>
          </ItemContainer>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  }
};

export default ListItem;

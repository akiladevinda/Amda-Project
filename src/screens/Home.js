import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Button} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goSecondScreen = () => {
    this.props.navigation.navigate('Second');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Amda Fucker</Text>
        <Button title="Click Me" onPress={() => this.goSecondScreen()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: Platform.OS === 'android' ? 40 : 0,
  },
  textsecond: {},
});

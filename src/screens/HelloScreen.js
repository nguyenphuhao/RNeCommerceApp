import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { sayHello } from '../actions/HelloAction';

class HelloScreen extends Component {
  render() {
    const { message } = this.props;
    return (
      <View style={styles.container}>
        <Text>Hao Nguyen</Text>
        <TouchableOpacity onPress={this.props.onClickSayHello}>
          <Text style={styles.button}>Say Hello</Text>
        </TouchableOpacity>
        <Text>{message}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.helloReducer.message,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickSayHello: () => dispatch(sayHello()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HelloScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ccc',
  },
});

import React, { Component } from 'react';
import { StyleSheet, Text, View, NavigationExperimental } from 'react-native';
import { connect } from 'react-redux'

import {push_main, pop_main } from '../actions/navigation'

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental

export default class MainNavContainer extends Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'PlaceHolder':
        return {}
    }
  }

  _renderHeader = (sceneProps) => {
    const { mainNavState } = this.props


  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Nav Container</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

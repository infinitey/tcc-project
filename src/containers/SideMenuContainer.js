import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { SideMenu, } from 'react-native-elements'
import MainNavContainer from './MainNavContainer'

export default class SideMenuContainer extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }

  toggleSideMenu () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const MenuComponent = (
    <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
      <Text>Side Menu</Text>
    </View>
  )
    return (
      <SideMenu
        isOpen={this.state.isOpen}
        menu={MenuComponent}>
        <MainNavContainer toggleSideMenu={this.toggleSideMenu.bind(this)} />
      </SideMenu>
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

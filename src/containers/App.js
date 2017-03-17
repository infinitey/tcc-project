import React, { Component } from 'react'
import { Provider }  from 'react-redux'

import SideMenuContainer from './SideMenuContainer'
import configureStore from '../config/configureStore'

export default class App extends Component {

  render() {
    return (
      <SideMenuContainer />
    )
  }

}

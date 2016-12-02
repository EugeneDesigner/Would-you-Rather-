import React, { Component } from 'react'
import { observer } from 'mobx-react'

export default class App extends Component {
  render() {
    <div>
      {this.props.children}
    </div>
  }
}

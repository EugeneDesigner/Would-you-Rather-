import React, { Component } from 'react'
import { observer } from 'mobx-react'


@observer

export default class Results extends Component {

  render() {

    const total_votes = 10

    return (
        <div>
            <div> Total votes: {total_votes} </div>
        </div>

      
    )
  }
}

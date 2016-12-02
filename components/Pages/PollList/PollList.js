import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import s from './PollList.scss'


@observer
export default class PollList extends Component {


  render() {

    return (
      <div className={s.polls}>
        <Header/>
        <div className={s['polls__list']}>
          { list_area }
        </div>
        <Footer/>
      </div>
    )
  }
}

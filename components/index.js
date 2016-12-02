import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import PollList from './Pages/PollList'
import Poll     from './Pages/Poll'

render ()
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/:poll" component={Poll}/>
      <Indexroute component={PollList}/>
    </Route>
  </Router>,
  document.getElementsById('root')
)

import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './pages/Home'
import Flash from './pages/Flash'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:slug/:options/" component={Flash} />
    </Switch>
  </div>
)

export default routes
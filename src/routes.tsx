import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './pages/Home'
import Flash from './pages/Flash'
import Worksheet from './pages/Worksheet'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/worksheet/:slug/:options/" component={Worksheet} />
      <Route path="/quiz/:slug/:options/" component={Flash} />
    </Switch>
  </div>
)

export default routes
import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { App, Login, PrivateRoute, StockList } from '../components'

export const history = getHistory()

export const appRouting = [
  {
    path: '/',
    icon: 'newspaper',
    name: 'Stock',
    exact: true,
    sidebarVisible: true,
    tag: PrivateRoute,
    component: StockList
  },
  {
    path: '/auth',
    name: 'Auth',
    tag: Route,
    component: Login
  }
]

export const Routing = authCheck => {
  // render components that are inside Switch (main view)
  const routesToRender = appRouting.map((route, i) => {
    const Tag = route.tag
    const {path, exact, strict, component} = route
    // select only props that we need
    const routeProps = {path, exact, strict, component}

    return <Tag key={i} {...routeProps} />
  })

  return (
    <App>
      <Switch>
        { routesToRender }
        <Redirect to="/" />
      </Switch>
    </App>
  )
}

function getHistory () {
  const basename = process.env.BUILD_DEMO ? '/react-semantic.ui-starter' : ''
  return createBrowserHistory({basename})
}

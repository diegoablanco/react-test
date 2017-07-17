import './index.css'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './client/components/Root'
import { Routing, history } from './client/routing'
import { configureStore } from './store'
import registerServiceWorker from './registerServiceWorker'

const preloadedState = window.__PRELOADED_STATE__ || {}
delete window.__PRELOADED_STATE__

const RootComponent = <Root routes={Routing} history={history} store={configureStore(preloadedState)} />

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(RootComponent)

if (module.hot) {
  module.hot.accept()
}

registerServiceWorker();


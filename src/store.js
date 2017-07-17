// Devtools
import {composeWithDevTools} from 'redux-devtools-extension'
// Redux stuff
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
// Application
import {reducers} from './client/reducers'
import {history} from './client/routing'

export const configureStore = initialState => {
  const routerMiddlewareApplied = applyMiddleware(routerMiddleware(history))
  const thunkApplied = applyMiddleware(thunk)
  let middlewares = null

  if (process.env.NODE_ENV === 'development') {
    middlewares = composeWithDevTools(routerMiddlewareApplied, thunkApplied)
  } else {
    middlewares = compose(routerMiddlewareApplied, thunkApplied)
  }

  return createStore(reducers, initialState, middlewares)
}
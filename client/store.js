import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger }  from 'redux-logger'
import thunk   from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducers from './reducers'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const configureStore = preloadedState => createStore(
	reducers,
	preloadedState,
	composeEnchancers(
			// Apply redux logger
			applyMiddleware(thunk, createLogger(), promise())
		)
	)

export default configureStore

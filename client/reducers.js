import { combineReducers } from 'redux'

import toggleReducer from './toggleReducer'

// Set reducer
const appReducer = combineReducers({
	toggle: toggleReducer,
})

export default appReducer

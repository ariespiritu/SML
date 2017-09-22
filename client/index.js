import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import configureStore from './store'

const store = configureStore()

// Components
import App from './App'
// Set host
axios.defaults.baseURL = 'http://localhost:3000'

// Render components with store
render(
	<Provider store={store}>
		<BrowserRouter>
			<Route path='/' component={App} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
)

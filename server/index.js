import express from 'express'
import path from 'path'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const app = express()

const webpackConfig = require('../webpack.config.dev')
const compiler = webpack(webpackConfig)

app.use(
	webpackMiddleware(compiler, {
		hot: true,
		publicPath: webpackConfig.output.publicPath,
		noInfo: true,
	})
	)

app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, '../client')))


app.get('/get-time', (req, res) => {
	// query for last_time key
	// I'll be setting up mongodb to my laptop
})

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(3000, () => console.log('Running on localhost:3000'))

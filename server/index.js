import express from 'express'
import path from 'path'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import mongoose from 'mongoose'

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

// build connection string
const dbURI = 'mongodb://127.0.0.1:27017/sample'

mongoose.Promise = global.Promise;

//Create the database connection
mongoose.connect(dbURI, {
	server: {
		socketOptions: {
			socketTimeoutMS: 0,
			connectonTimeout: 0
		}
	}
}, (err) => {
	if (err) {
		console.log('Could not connect to DB');
	} else {
		console.log('Database connected to: ', dbURI);
		mongoose.set('debug', debug)
	}
})

// If the node process ends
process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('Database connection terminated by app');
		process.exit(0)
	})
})

app.get('/get-time', (req, res) => {
	// query for last_time key
	// I'll be setting up mongodb to my laptop
})

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(3000, () => console.log('Running on localhost:3000'))

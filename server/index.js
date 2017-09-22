import express from 'express'
import path from 'path'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import mongoose from 'mongoose'
import moment from 'moment'

import Schema from './schema'

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
	}
})

// If the node process ends
process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('Database connection terminated by app');
		process.exit(0)
	})
})

// Initialize model
const lastTime = mongoose.model('lastTime')

app.get('/get_time', async (req, res) => {
// Receives a request to /get-time
	const timeNow = moment().format()

	// store current time in mongoDB as last_time
	const last = new lastTime({
		last_time: timeNow
	})
	await last.save()

	// query for the last_time key
	lastTime.findOne({last_time: timeNow}).exec((error, lastTime) => {
		if (error) {
			res.send({ message:"Last Time: " })
		} else {
			if (lastTime.lastTime === '') {
				res.send({ "Last Time": "empty" })
			} else {
				res.send({ "Last Time:": lastTime.last_time, "Current Time": timeNow })
			}
		}
	})
})

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(3000, () => console.log('Running on localhost:3000'))

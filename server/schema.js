import mongoose from 'mongoose'
import moment from 'moment'

// Create schema for query and saving
const Schema = mongoose.Schema

const lastTimeSchema = new Schema({
  last_time: {
    type: Date,
    default: moment().format()
  }
})

export default mongoose.model('lastTime', lastTimeSchema)

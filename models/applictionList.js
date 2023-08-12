import mongoose from 'mongoose'

const Schema = mongoose.Schema

const applicationListSchema = new Schema({
  name: String,
  website: String,
  dateApplied: Date,
},{
  timestamps: true,
})

const ApplicationList = mongoose.model('ApplicationList', applicationListSchema)

export { ApplicationList }
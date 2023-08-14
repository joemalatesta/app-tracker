import mongoose from 'mongoose'

const Schema = mongoose.Schema

const applicationListSchema = new Schema({
  type: String,
  companyName: String,
  contactPerson: String,
  websiteLink: String,
  status: String,
  dateApplied: String,
  resumeSent: Boolean,
  portfolioSent: Boolean,
},{
  timestamps: true,
})

const ApplicationList = mongoose.model('ApplicationList', applicationListSchema)

export { ApplicationList }
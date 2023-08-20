import { ApplicationList } from "../models/applicationList.js"

function index(req, res) {
  ApplicationList.find({})
  .then(list => res.json(list))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function deleteOne(req, res) {
  ApplicationList.findById(req.params.id)
  .then(jobList => {
    ApplicationList.findByIdAndDelete(jobList._id)
      .then(deletedJobList => {

        res.json(deletedJobList)
      })
  
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function update(req, res) {
  ApplicationList.findById(req.params.id)
  .then(jobList => {
    ApplicationList.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedJobList => {
      res.json(updatedJobList)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  console.log(req.body);
  ApplicationList.create(req.body)
  .then(jobList => {
    ApplicationList.findById(jobList._id)
    .then(populatedJobList => {
      res.json(populatedJobList)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export { 
  index,
  create,
  deleteOne as delete,
  update
}


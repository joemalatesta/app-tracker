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
  .then(list => {
    ApplicationList.findByIdAndDelete(list._id)
      .then(deletedCharSheet => {

        res.json(deletedCharSheet)
      })
  
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function update(req, res) {
  ApplicationList.findById(req.params.id)
  .then(char => {
    if (char.owner._id.equals(req.user.profile)) {
      ApplicationList.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(updatedCharSheet => {
        res.json(updatedCharSheet)
      })
    } else {
      res.status(401).json({err: "Not authorized!"})
    }
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
  .then(char => {
    ApplicationList.findById(char._id)
    .then(populatedListSheet => {
      res.json(populatedListSheet)
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


const express = require ('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/todos', (req, res, next) => {

  console.log("TESTING: XYXZJFKL");
  console.log('This is req:' + req);
  console.log('This is res:' + res);
  console.log('This is next:' + next);
  console.log('This is req.params:' + req.params);
  console.log('This is req.params.id:' + req.params.id);

  //this will return all the data, exposing only the id and action field to the client
  Todo.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/todos', (req, res, next) => {
  if(req.body.action){
    Todo.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  } else {
    res.json({
      error: "the input field is empty"
    })
  }
});

router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

module.exports = router;

var express = require('express');
var router = express.Router();

const db  = require('../models/index');
// const sequelize = require('sequelize');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

  let username=req.body.user;
  let password=req.body.password;

  //console.log(`INSERT INTO user (name, password) VALUES('${req.body.name}','${req.body.password}')`)

  db.sequelize.query(
    `INSERT INTO user (name, password) VALUES('${req.body.name}','${req.body.password}')`
  )
  .then((result) => {
    console.log(result);
    res.json('success');
  })
  .catch((error) => {
    console.log(error);
    res.status(500);
    res.send('error');
  });
});

module.exports = router;

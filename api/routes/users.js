var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
      //build example
      {id:1, username:"Shane"},
      {id:2, username:"Xiaozhu"},
      {id:3, username:"Xishang"},
  ]);
});

module.exports = router;

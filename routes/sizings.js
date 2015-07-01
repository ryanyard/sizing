var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Sizing = require('../models/Sizing.js');

/* GET /sizings listing. */
router.get('/', function(req, res, next) {
  Sizing.find(function (err, sizings) {
    if (err) return next(err);
    res.json(sizings);
  });
});

/* POST /sizings */
router.post('/', function(req, res, next) {
  Sizing.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /sizings/id */
router.get('/:id', function(req, res, next) {
  Sizing.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /sizings/:id */
router.put('/:id', function(req, res, next) {
  Sizing.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /sizings/:id */
router.delete('/:id', function(req, res, next) {
  Sizing.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;


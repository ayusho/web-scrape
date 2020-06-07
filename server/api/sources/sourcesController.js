var Sources = require("../sources/sourcesModel");

var logger = require("../../util/logger");
var _ = require("lodash");
var mongoose = require("mongoose");

exports.post = async (req, res, next) => {
  try {
    let newSource = req.body;
    let result = await Sources.create(newSource);
    res.send(result);
  } catch (error) {
    logger.log(error);
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    let result = await Sources.find({});
    res.send(result);
  } catch (error) {
    logger.log(error);
    next(error);
  }
};

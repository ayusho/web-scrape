var Sources = require("../sources/sourcesModel");

var logger = require("../../util/logger");
var _ = require("lodash");
var mongoose = require("mongoose");

//save the array of sources to Sources collections
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

//get all the documents from Sources Collection
exports.get = async (req, res, next) => {
  try {
    let result = await Sources.find({});
    res.send(result);
  } catch (error) {
    logger.log(error);
    next(error);
  }
};

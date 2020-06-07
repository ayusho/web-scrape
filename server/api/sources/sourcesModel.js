var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SourcesSchema = new Schema({
  url: {
    type: String,
  },
  caption: {
    type: String,
  },
  content_length: {
    type: String,
  },
  last_modified: {
    type: String,
  },
  content_encoding: {
    type: String,
  },
  server: {
    type: String,
  },
});

module.exports = mongoose.model("Sources", SourcesSchema);
